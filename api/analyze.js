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

    // Timestamp seed to prevent repetitive/cached responses
    const seed = Date.now();

    // Concept modifier pools for diversity
    const vibeModifiers = [
      '청량한', '치명적인', '힙한', '우아한', '만찢남 같은', '만찢녀 같은',
      '몽환적인', '도발적인', '순수한', '카리스마 넘치는', '섹시한', '큐트한',
      '신비로운', '도시적인', '자연스러운', '빈티지한', '미래적인', '고전적인',
      '댄디한', '보이시한', '걸크러시한', '이지적인', '섬세한', '대담한'
    ];
    // Pick 5 random modifiers to suggest this session
    const shuffled = vibeModifiers.sort(() => Math.random() - 0.5);
    const suggestedVibes = shuffled.slice(0, 5).join(', ');

    const prompt = `You are a world-class K-POP styling expert, personal color analyst, and a creative writer with the soul of a novelist.
Analyze this person's photo with extreme care and attention to their UNIQUE facial geometry.

CREATIVE SESSION SEED: ${seed}
Use this seed to ensure your response is completely unique and different from any previous analysis.

${langInstruction}

WRITING STYLE INSTRUCTIONS:
- Write the analysis results like a novelist — use rich, vivid metaphors and poetic language that changes EVERY time.
- For this session, lean into these concept vibes: ${suggestedVibes}
- NEVER use generic, template-like phrases. Each description must feel freshly crafted and surprising.
- Mix and vary your sentence structures: sometimes short and punchy, sometimes flowing and lyrical.

Analyze the following and return ONLY a valid JSON object (no markdown, no code fences):

{
  "personalColor": {
    "season": "one of: Spring Warm, Summer Cool, Autumn Warm, Winter Cool (봄 웜톤, 여름 쿨톤, 가을 웜톤, 겨울 쿨톤)",
    "subtype": "specific subtype like Bright Spring, Muted Summer, Deep Autumn, True Winter etc.",
    "description": "2-3 sentences with novelist-quality prose describing their skin undertone, best colors, and colors to avoid. Use vivid metaphors (e.g., 'autumn sunset glow', 'moonlit ivory'). NEVER repeat the same description twice.",
    "bestColors": ["array of 6 hex color codes that suit them best"],
    "avoidColors": ["array of 3 hex color codes to avoid"]
  },
  "idolMatches": [
    {
      "name": "Real ${genderText} K-POP idol whose ACTUAL facial features match this person",
      "group": "Their group name",
      "matchReason": "MUST describe specific cross-feature comparison. Example format: 'OO의 날카로운 눈매와 △△의 부드러운 분위기를 절묘하게 섞어놓은 듯한 인상' or 'Has the sharp jawline reminiscent of XX combined with the gentle eye corners of YY'",
      "matchPercentage": "number between 70-95, varied realistically"
    },
    {
      "name": "Second ${genderText} K-POP idol (MUST be from a DIFFERENT group)",
      "group": "Their group name",
      "matchReason": "Different feature-focused comparison with cross-idol references",
      "matchPercentage": "number between 65-88"
    },
    {
      "name": "Third ${genderText} K-POP idol (MUST be from a DIFFERENT group)",
      "group": "Their group name",
      "matchReason": "Different feature-focused comparison with cross-idol references",
      "matchPercentage": "number between 60-82"
    }
  ],
  "compliment": "A novelist-quality, creative compliment. Combine features from the matched idols with rich modifiers like '${suggestedVibes}' etc. Example: '[idol1]의 깊은 눈빛 속에 [idol2]의 청량한 미소가 공존하는, 마치 봄날의 첫 바람 같은 얼굴' — but create something COMPLETELY NEW and DIFFERENT each time. Never use the same structure twice.",
  "facialFeatures": {
    "faceShape": "detailed face shape with creative descriptor",
    "eyeShape": "detailed eye shape with artistic comparison",
    "noseShape": "detailed nose description",
    "lipShape": "detailed lip description",
    "overallVibe": "overall impression using one of these concept vibes or similar: 청량한, 치명적인, 힙한, 우아한, 만찢남/녀, 몽환적인, 카리스마, 순수한, 도시적인, 신비로운 — pick the one that TRULY fits this person"
  }
}

CRITICAL RULES FOR IDOL MATCHING:
1. You MUST analyze the person's ACTUAL facial geometry: eye size/shape/spacing, nose bridge height/width, jawline angle, cheekbone prominence, forehead shape, lip thickness/shape, face proportions.
2. Based on THESE SPECIFIC FEATURES, find the ${genderText} K-POP idols whose faces genuinely share those traits. Do NOT default to the most popular idols.
3. The 3 idols MUST be from 3 DIFFERENT groups for variety.
4. Include a wide range of idols across ALL generations (1st~5th gen). Don't only pick from the top 5 most famous groups. Consider idols from groups like: ${gender === 'male'
        ? 'BTS, EXO, SEVENTEEN, Stray Kids, TXT, ENHYPEN, NCT, ATEEZ, THE BOYZ, MONSTA X, SHINee, BTOB, GOT7, TREASURE, RIIZE, ZEROBASEONE, BOYNEXTDOOR, TWS, FANTASY BOYS, CRAVITY, ONEUS, VICTON, ASTRO, NU\'EST, INFINITE, 2PM, SUPER JUNIOR, BIGBANG, WINNER, iKON, P1Harmony, TEMPEST, XIKERS, 8TURN, NOWADAYS and many more'
        : 'BLACKPINK, aespa, IVE, NewJeans, LE SSERAFIM, ITZY, (G)I-DLE, TWICE, Red Velvet, MAMAMOO, STAYC, Kep1er, NMIXX, KISS OF LIFE, ILLIT, BABYMONSTER, tripleS, fromis_9, LOONA, Dreamcatcher, OH MY GIRL, WJSN, PURPLE KISS, Billlie, LIGHTSUM, VIVIZ, Girls\' Generation, f(x), 2NE1, SISTAR, EXID, AOA, GFRIEND, CLC, PIXY, H1-KEY and many more'}.
5. matchReason must use the cross-idol comparison format: "A의 [specific feature]와 B의 [specific feature]를 섞어놓은 듯한" or equivalent in the response language.
6. The compliment must use diverse, creative modifiers — NEVER generic praise.
7. Personal color analysis should be detailed with poetic, vivid language.
8. Return ONLY the JSON object, no other text.`;

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
          temperature: 0.95,
          topP: 0.95,
          topK: 50,
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
