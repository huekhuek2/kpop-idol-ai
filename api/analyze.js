export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { image, gender, lang } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const genderText = gender === 'female' ? '여자' : '남자';
    const langInstruction = lang === 'en'
      ? 'Respond entirely in English.'
      : lang === 'ja'
        ? 'Respond entirely in Japanese.'
        : 'Respond entirely in Korean.';

    const prompt = `You are a K-POP styling expert and personal color analyst. Analyze this person's photo carefully.

${langInstruction}

Analyze the following and return ONLY a valid JSON object (no markdown, no code fences):

{
  "personalColor": {
    "season": "one of: Spring Warm, Summer Cool, Autumn Warm, Winter Cool (봄 웜톤, 여름 쿨톤, 가을 웜톤, 겨울 쿨톤)",
    "subtype": "specific subtype like Bright Spring, Muted Summer, Deep Autumn, True Winter etc.",
    "description": "2-3 sentences describing their skin undertone, best colors, and colors to avoid",
    "bestColors": ["array of 6 hex color codes that suit them best"],
    "avoidColors": ["array of 3 hex color codes to avoid"]
  },
  "idolMatches": [
    {
      "name": "Real ${genderText} K-POP idol name (must be a well-known, real idol)",
      "group": "Their group name",
      "matchReason": "Specific facial feature similarity (e.g., eye shape, jawline, nose bridge)",
      "matchPercentage": 85
    },
    {
      "name": "Second ${genderText} K-POP idol",
      "group": "Their group name",
      "matchReason": "Specific facial feature similarity",
      "matchPercentage": 78
    },
    {
      "name": "Third ${genderText} K-POP idol",
      "group": "Their group name",
      "matchReason": "Specific facial feature similarity",
      "matchPercentage": 72
    }
  ],
  "compliment": "A creative, flattering compliment combining features from the matched idols. Format: Your face combines [idol1]'s [feature] with [idol2]'s [feature] and [idol3]'s [feature]. Make it poetic and flattering. Must be different and unique each time. Use varied sentence structures and metaphors.",
  "facialFeatures": {
    "faceShape": "face shape description",
    "eyeShape": "eye shape description",
    "noseShape": "nose shape description",
    "lipShape": "lip shape description",
    "overallVibe": "overall impression/vibe"
  }
}

IMPORTANT RULES:
1. Only recommend REAL, well-known ${genderText} K-POP idols. Make sure the 3 idols are from different groups for variety.
2. The compliment must be creative, unique, and flattering - never generic. Use varied metaphors and sentence structures.
3. Be specific about facial feature similarities - don't be vague.
4. Personal color analysis should be detailed and accurate based on visible skin tone.
5. Return ONLY the JSON object, no other text.`;

    // Base64 image data - remove the data URL prefix if present
    const base64Data = image.includes(',') ? image.split(',')[1] : image;
    const mimeType = image.includes('data:') ? image.split(';')[0].split(':')[1] : 'image/jpeg';

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite-001:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data
              }
            }
          ]
        }],
        generationConfig: {
          temperature: 0.9,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API error:', errorText);
      return res.status(geminiResponse.status).json({
        error: 'AI analysis failed',
        details: errorText
      });
    }

    const geminiData = await geminiResponse.json();

    // Extract the text response
    const textResponse = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      return res.status(500).json({ error: 'No response from AI' });
    }

    // Parse the JSON from the response (handle potential markdown code fences)
    let cleanJson = textResponse.trim();
    if (cleanJson.startsWith('```')) {
      cleanJson = cleanJson.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }

    const result = JSON.parse(cleanJson);

    return res.status(200).json(result);

  } catch (error) {
    console.error('Analysis error:', error);
    return res.status(500).json({
      error: 'Analysis failed',
      message: error.message
    });
  }
}
