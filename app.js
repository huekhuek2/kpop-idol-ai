// ===== TRANSLATIONS =====
const translations = {
    ko: {
        badge: 'AI 퍼스널 컬러 진단',
        title: '나와 닮은 K-POP 아이돌은?',
        subtitle: '사진 한 장으로 퍼스널 컬러 진단과 닮은꼴 아이돌을 찾아보세요',
        uploadIcon: '📸',
        uploadText: '<span>사진을 업로드</span>하거나 여기에 끌어놓으세요',
        uploadHint: 'JPG, PNG (최대 10MB)',
        male: '👨 남자 아이돌',
        female: '👩 여자 아이돌',
        analyzeBtn: '✨ AI 분석 시작하기',
        loadingText: 'AI가 얼굴을 분석하고 있어요...',
        resultTitle: '퍼스널 컬러 진단 결과',
        resultSubtitle: 'AI가 분석한 당신의 스타일 리포트',
        bestColors: '베스트 컬러',
        avoidColors: '피해야 할 컬러',
        idolTitle: '닮은꼴 K-POP 아이돌 TOP 3',
        featureFace: '얼굴형',
        featureEye: '눈 모양',
        featureNose: '코 모양',
        featureLip: '입술 모양',
        featureVibe: '전체 분위기',
        ctaBtn: '🏥 이 아이돌처럼 되고 싶다면? AI 성형 상담소에서 무료 견적 받기',
        shareTwitter: '𝕏 트위터 공유',
        saveImage: '📷 결과 저장하기',
        copyLink: '🔗 링크 복사',
        copied: '✅ 복사됨!',
        tweetText: '나랑 닮은 K-POP 아이돌은 {idol}! 당신의 퍼스널 컬러와 닮은꼴 아이돌을 확인해보세요 ✨ #KPOP #아이돌닮은꼴 #퍼스널컬러',
        columnTitle: 'K-Beauty 스타일링 가이드',
        footerText: '© 2026 K-POP Idol AI. All rights reserved.',
        errorMsg: '분석 중 오류가 발생했습니다. 다시 시도해주세요.',
        noImage: '사진을 먼저 업로드해주세요.',
        retryBtn: '다시 분석하기',
        optimizingText: '🔄 이미지 최적화 중...',
    },
    en: {
        badge: 'AI Personal Color Diagnosis',
        title: 'Which K-POP Idol Do You Look Like?',
        subtitle: 'Discover your personal color and K-POP idol lookalike with just one photo',
        uploadIcon: '📸',
        uploadText: '<span>Upload a photo</span> or drag and drop here',
        uploadHint: 'JPG, PNG (max 10MB)',
        male: '👨 Male Idol',
        female: '👩 Female Idol',
        analyzeBtn: '✨ Start AI Analysis',
        loadingText: 'AI is analyzing your face...',
        resultTitle: 'Personal Color Diagnosis Result',
        resultSubtitle: 'Your AI-powered style report',
        bestColors: 'Best Colors',
        avoidColors: 'Colors to Avoid',
        idolTitle: 'Top 3 Lookalike K-POP Idols',
        featureFace: 'Face Shape',
        featureEye: 'Eye Shape',
        featureNose: 'Nose Shape',
        featureLip: 'Lip Shape',
        featureVibe: 'Overall Vibe',
        ctaBtn: '🏥 Want to look like this idol? Get a free AI consultation',
        shareTwitter: '𝕏 Share on X',
        saveImage: '📷 Save Result',
        copyLink: '🔗 Copy Link',
        copied: '✅ Copied!',
        tweetText: 'My K-POP idol lookalike is {idol}! Find your personal color and idol match ✨ #KPOP #IdolLookalike #PersonalColor',
        columnTitle: 'K-Beauty Styling Guide',
        footerText: '© 2026 K-POP Idol AI. All rights reserved.',
        errorMsg: 'An error occurred during analysis. Please try again.',
        noImage: 'Please upload a photo first.',
        retryBtn: 'Analyze Again',
        optimizingText: '🔄 Optimizing image...',
    },
    ja: {
        badge: 'AIパーソナルカラー診断',
        title: 'あなたに似ているK-POPアイドルは？',
        subtitle: '写真一枚でパーソナルカラー診断とそっくりアイドルを見つけよう',
        uploadIcon: '📸',
        uploadText: '<span>写真をアップロード</span>またはここにドラッグ＆ドロップ',
        uploadHint: 'JPG, PNG（最大10MB）',
        male: '👨 男性アイドル',
        female: '👩 女性アイドル',
        analyzeBtn: '✨ AI分析を開始する',
        loadingText: 'AIが顔を分析しています...',
        resultTitle: 'パーソナルカラー診断結果',
        resultSubtitle: 'AIが分析したあなたのスタイルレポート',
        bestColors: 'ベストカラー',
        avoidColors: '避けるべきカラー',
        idolTitle: 'そっくりK-POPアイドル TOP 3',
        featureFace: '顔の形',
        featureEye: '目の形',
        featureNose: '鼻の形',
        featureLip: '唇の形',
        featureVibe: '全体の雰囲気',
        ctaBtn: '🏥 このアイドルのようになりたい？AI美容相談で無料見積もり',
        shareTwitter: '𝕏 Xでシェア',
        saveImage: '📷 結果を保存',
        copyLink: '🔗 リンクをコピー',
        copied: '✅ コピーしました！',
        tweetText: '私に似ているK-POPアイドルは{idol}！あなたのパーソナルカラーとそっくりアイドルを確認してみて ✨ #KPOP #アイドルそっくり #パーソナルカラー',
        columnTitle: 'K-Beautyスタイリングガイド',
        footerText: '© 2026 K-POP Idol AI. All rights reserved.',
        errorMsg: '分析中にエラーが発生しました。もう一度お試しください。',
        noImage: '先に写真をアップロードしてください。',
        retryBtn: 'もう一度分析する',
        optimizingText: '🔄 画像を最適化しています...',
    }
};

// ===== STATE =====
let currentLang = 'ko';
let currentGender = 'male';
let uploadedImage = null;
let analysisResult = null;

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
    setupLanguageToggle();
    setupUpload();
    setupGenderSelector();
    setupAnalyzeButton();
    setupColumnTabs();
    setLanguage('ko');
});

// ===== LANGUAGE =====
function setupLanguageToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    const t = translations[lang];
    // Update all translatable elements
    const map = {
        'hero-badge': 'badge', 'hero-title': 'title', 'hero-subtitle': 'subtitle',
        'upload-text': 'uploadText', 'upload-hint': 'uploadHint',
        'analyze-btn': 'analyzeBtn', 'loading-text': 'loadingText',
        'result-title': 'resultTitle', 'result-subtitle': 'resultSubtitle',
        'best-colors-label': 'bestColors', 'avoid-colors-label': 'avoidColors',
        'idol-title': 'idolTitle',
        'feature-face-label': 'featureFace', 'feature-eye-label': 'featureEye',
        'feature-nose-label': 'featureNose', 'feature-lip-label': 'featureLip',
        'feature-vibe-label': 'featureVibe',
        'cta-btn': 'ctaBtn',
        'share-twitter': 'shareTwitter', 'save-image': 'saveImage',
        'copy-link': 'copyLink',
        'column-title': 'columnTitle', 'footer-text': 'footerText',
        'retry-btn': 'retryBtn',
    };
    for (const [id, key] of Object.entries(map)) {
        const el = document.getElementById(id);
        if (el) {
            if (key === 'uploadText') el.innerHTML = t[key];
            else el.textContent = t[key];
        }
    }
    // Gender buttons
    const maleBtn = document.getElementById('male-btn');
    const femaleBtn = document.getElementById('female-btn');
    if (maleBtn) maleBtn.textContent = t.male;
    if (femaleBtn) femaleBtn.textContent = t.female;

    // Column content
    document.querySelectorAll('.column-lang-content').forEach(el => {
        el.style.display = 'none';
    });
    const activeColumn = document.getElementById(`column-${lang}`);
    if (activeColumn) activeColumn.style.display = 'block';
    document.querySelectorAll('.column-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.lang === lang);
    });
}

// ===== UPLOAD =====
function setupUpload() {
    const area = document.getElementById('upload-area');
    const input = document.getElementById('file-input');
    const placeholder = document.getElementById('upload-placeholder');
    const preview = document.getElementById('preview-container');
    const previewImg = document.getElementById('preview-img');
    const removeBtn = document.getElementById('preview-remove');

    area.addEventListener('click', (e) => {
        if (!area.classList.contains('has-image')) input.click();
    });
    area.addEventListener('dragover', (e) => { e.preventDefault(); area.classList.add('dragover'); });
    area.addEventListener('dragleave', () => area.classList.remove('dragover'));
    area.addEventListener('drop', (e) => {
        e.preventDefault(); area.classList.remove('dragover');
        if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
    });
    input.addEventListener('change', (e) => { if (e.target.files[0]) handleFile(e.target.files[0]); });
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        clearImage();
    });

    function handleFile(file) {
        if (!file.type.startsWith('image/')) return;
        if (file.size > 10 * 1024 * 1024) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImage = e.target.result;
            previewImg.src = uploadedImage;
            placeholder.style.display = 'none';
            preview.style.display = 'block';
            area.classList.add('has-image');
        };
        reader.readAsDataURL(file);
    }

    function clearImage() {
        uploadedImage = null;
        input.value = '';
        placeholder.style.display = 'block';
        preview.style.display = 'none';
        area.classList.remove('has-image');
    }
}

// ===== GENDER =====
function setupGenderSelector() {
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentGender = btn.dataset.gender;
            document.querySelectorAll('.gender-btn').forEach(b => b.classList.toggle('active', b.dataset.gender === currentGender));
        });
    });
}

// ===== IMAGE COMPRESSION =====
function compressImage(dataUrl, maxSize = 1024, quality = 0.75) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            let { width, height } = img;
            // Resize if larger than maxSize
            if (width > maxSize || height > maxSize) {
                if (width > height) {
                    height = Math.round(height * (maxSize / width));
                    width = maxSize;
                } else {
                    width = Math.round(width * (maxSize / height));
                    height = maxSize;
                }
            }
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            const compressed = canvas.toDataURL('image/jpeg', quality);
            resolve(compressed);
        };
        img.onerror = reject;
        img.src = dataUrl;
    });
}

// ===== ANALYZE =====
function setupAnalyzeButton() {
    const btn = document.getElementById('analyze-btn');
    const retryBtn = document.getElementById('retry-btn');
    btn.addEventListener('click', startAnalysis);
    if (retryBtn) retryBtn.addEventListener('click', () => {
        document.getElementById('result-section').classList.remove('show');
        document.querySelector('.share-section').style.display = 'none';
        startAnalysis();
    });
}

async function startAnalysis() {
    const t = translations[currentLang];
    if (!uploadedImage) {
        alert(t.noImage);
        return;
    }
    const btn = document.getElementById('analyze-btn');
    const loading = document.getElementById('loading-section');
    const loadingText = document.getElementById('loading-text');
    const resultSection = document.getElementById('result-section');

    btn.disabled = true;
    resultSection.classList.remove('show');
    loading.classList.add('show');

    try {
        // Step 1: Compress image
        loadingText.textContent = t.optimizingText;
        const compressedImage = await compressImage(uploadedImage, 1024, 0.75);

        // Step 2: Send to API
        loadingText.textContent = t.loadingText;
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                image: compressedImage,
                gender: currentGender,
                lang: currentLang
            })
        });

        if (!response.ok) throw new Error('API error');
        analysisResult = await response.json();
        renderResult(analysisResult);
    } catch (error) {
        console.error(error);
        alert(t.errorMsg);
    } finally {
        btn.disabled = false;
        loading.classList.remove('show');
    }
}

function renderResult(data) {
    // Personal Color
    document.getElementById('pc-season').textContent = data.personalColor.season;
    document.getElementById('pc-subtype').textContent = data.personalColor.subtype;
    document.getElementById('pc-desc').textContent = data.personalColor.description;

    // Color palettes
    const bestContainer = document.getElementById('best-colors');
    const avoidContainer = document.getElementById('avoid-colors');
    bestContainer.innerHTML = '';
    avoidContainer.innerHTML = '';
    (data.personalColor.bestColors || []).forEach(c => {
        const sw = document.createElement('div');
        sw.className = 'color-swatch';
        sw.style.background = c;
        sw.title = c;
        bestContainer.appendChild(sw);
    });
    (data.personalColor.avoidColors || []).forEach(c => {
        const sw = document.createElement('div');
        sw.className = 'color-swatch';
        sw.style.background = c;
        sw.title = c;
        avoidContainer.appendChild(sw);
    });

    // Idol matches
    const idolList = document.getElementById('idol-list');
    idolList.innerHTML = '';
    (data.idolMatches || []).forEach((idol, i) => {
        const item = document.createElement('div');
        item.className = 'idol-item';
        item.innerHTML = `
      <div class="idol-rank">${i + 1}</div>
      <div class="idol-info">
        <div class="idol-name">${idol.name}</div>
        <div class="idol-group">${idol.group}</div>
        <div class="idol-reason">${idol.matchReason}</div>
      </div>
      <div class="idol-match-pct">${idol.matchPercentage}%</div>
    `;
        idolList.appendChild(item);
    });

    // Compliment
    document.getElementById('compliment-text').textContent = data.compliment;

    // Facial features
    if (data.facialFeatures) {
        const ff = data.facialFeatures;
        document.getElementById('feature-face-value').textContent = ff.faceShape || '';
        document.getElementById('feature-eye-value').textContent = ff.eyeShape || '';
        document.getElementById('feature-nose-value').textContent = ff.noseShape || '';
        document.getElementById('feature-lip-value').textContent = ff.lipShape || '';
        document.getElementById('feature-vibe-value').textContent = ff.overallVibe || '';
    }

    // Show result
    document.getElementById('result-section').classList.add('show');
    document.querySelector('.share-section').style.display = 'flex';
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Setup share
    setupShareButtons(data);
}

// ===== SHARE =====
function setupShareButtons(data) {
    const t = translations[currentLang];
    const idolName = data.idolMatches?.[0]?.name || 'K-POP Idol';

    // Twitter
    document.getElementById('share-twitter').onclick = () => {
        const text = t.tweetText.replace('{idol}', idolName);
        const url = encodeURIComponent(window.location.href);
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
    };

    // Save Image
    document.getElementById('save-image').onclick = async () => {
        try {
            const card = document.getElementById('result-card');
            const canvas = await html2canvas(card, {
                backgroundColor: '#0a0a0f',
                scale: 2,
                useCORS: true,
            });
            const link = document.createElement('a');
            link.download = 'kpop-idol-result.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (e) {
            console.error('Image save failed:', e);
        }
    };

    // Copy Link
    document.getElementById('copy-link').onclick = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            const btn = document.getElementById('copy-link');
            const original = btn.textContent;
            btn.textContent = t.copied;
            btn.classList.add('copied');
            setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 2000);
        } catch (e) {
            console.error('Copy failed:', e);
        }
    };
}

// ===== COLUMN TABS =====
function setupColumnTabs() {
    document.querySelectorAll('.column-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const lang = tab.dataset.lang;
            document.querySelectorAll('.column-tab').forEach(t => t.classList.toggle('active', t.dataset.lang === lang));
            document.querySelectorAll('.column-lang-content').forEach(c => c.style.display = 'none');
            document.getElementById(`column-${lang}`).style.display = 'block';
        });
    });
}
