import { useState } from 'react';
import { cn } from '@/lib/utils';
import { TRANSLATIONS } from '@/lib/constants';

interface StaticSectionProps {
    lang: keyof typeof TRANSLATIONS;
    translations: any;
}

export function KBeautyGuide({ lang, translations }: StaticSectionProps) {
    // Current Guide Content is hardcoded in HTML, so we port it here.
    // For simplicity, I'll use a mapping or just render based on lang directly since it's static text.
    // A better way is to move this fully to constants, but it's large text blocks.
    // Let's keep it here as per Plan.

    return (
        <section className="my-16">
            <h2 className="text-2xl font-bold text-center text-gradient mb-8">{translations.columnTitle}</h2>
            {/* We could add tabs here if we wanted to switch lang independently, but typically it follows app lang */}

            <div className="bg-bg-card border border-glass-border rounded-2xl p-8 text-sm leading-loose text-text-secondary">
                {lang === 'ko' && (
                    <>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6 first:mt-0">퍼스널 컬러란 무엇인가요?</h3>
                        <p className="mb-4">퍼스널 컬러는 개인의 타고난 피부 톤, 머리카락 색, 눈동자 색 등을 종합적으로 분석하여 가장 잘 어울리는 색상 팔레트를 찾아주는 컬러 진단법입니다.</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">얼굴형별 K-POP 스타일링 팁</h3>
                        <p className="mb-4">K-POP 아이돌들의 스타일링 비결은 자신의 얼굴형에 맞는 최적의 헤어스타일과 메이크업을 찾는 것에서 시작됩니다. 둥근 얼굴형은 이마를 드러내는 센터 파트나 볼륨감 있는 탑 헤어로 얼굴을 길어 보이게 하는 것이 효과적입니다.</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">퍼스널 컬러에 맞는 메이크업 비법</h3>
                        <p>봄 웜톤이라면 코랄 핑크 립스틱과 골드 톤 아이섀도우로 화사하고 생기 넘치는 메이크업을 추천합니다. 여름 쿨톤은 로즈 핑크 립과 라벤더 톤의 아이섀도우가 잘 어울립니다.</p>
                    </>
                )}
                {lang === 'en' && (
                    <>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6 first:mt-0">What is Personal Color Analysis?</h3>
                        <p className="mb-4">Personal color analysis is a method of identifying the most flattering color palette for an individual by comprehensively analyzing their natural skin tone, hair color, and eye color.</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">K-POP Styling Tips by Face Shape</h3>
                        <p className="mb-4">The styling secrets of K-POP idols begin with finding the perfect hairstyle and makeup for your face shape. Round faces benefit from center parts that expose the forehead or voluminous top hair to create a lengthening effect.</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">Makeup Secrets for Your Personal Color</h3>
                        <p>If you're a Spring Warm type, try coral pink lipstick with gold-toned eyeshadow for a bright, lively look. Summer Cool types look stunning with rose pink lips and lavender-toned eyeshadow.</p>
                    </>
                )}
                {lang === 'ja' && (
                    <>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6 first:mt-0">パーソナルカラーとは？</h3>
                        <p className="mb-4">パーソナルカラーとは、生まれ持った肌の色、髪の色、瞳の色を総合的に分析し、最も似合うカラーパレットを見つけるカラー診断法です。</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">顔型別K-POPスタイリングのコツ</h3>
                        <p className="mb-4">K-POPアイドルのスタイリングの秘訣は、自分の顔型に合った最適なヘアスタイルとメイクアップを見つけることから始まります。丸い顔型は額を出すセンターパートやトップにボリュームを持たせることで、顔を長く見せる効果があります。</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">パーソナルカラーに合ったメイクアップの秘訣</h3>
                        <p>スプリングウォームタイプなら、コーラルピンクのリップスティックとゴールド系のアイシャドウで華やかで生き生きとしたメイクがおすすめです。サマークールはローズピンクのリップとラベンダートーンのアイシャドウが似合います。</p>
                    </>
                )}
            </div>
        </section>
    );
}

export function InsightsSection({ lang, translations }: StaticSectionProps) {
    return (
        <section className="my-16">
            <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan mb-2">{translations.insightsTitle}</h2>
            <p className="text-center text-text-secondary mb-8">{translations.insightsSubtitle}</p>

            <div className="bg-bg-card border border-glass-border rounded-2xl p-8 text-sm leading-loose text-text-secondary">
                {/* Simplified Content Logic for Brevity - Keeping alignment with HTML structure */}
                {lang === 'ko' && (
                    <article>
                        <h3 className="text-text-primary text-lg font-bold mb-3">🌟 K-POP의 진화: 90년대부터 현재까지</h3>
                        <p className="mb-4">K-POP의 역사는 1992년 서태지와 아이들의 등장으로 시작됩니다. 이후 H.O.T, 젝스키스 등이 아이돌 문화를 정립했습니다.</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">🚀 글로벌 성공 비결</h3>
                        <p>체계적인 연습생 시스템과 SNS를 적극 활용한 소통이 글로벌 팬덤을 형성하는 핵심이 되었습니다.</p>
                    </article>
                )}
                {lang === 'en' && (
                    <article>
                        <h3 className="text-text-primary text-lg font-bold mb-3">🌟 The Evolution of K-POP</h3>
                        <p className="mb-4">It started in 1992 with Seo Taiji and Boys. Later, groups like H.O.T established the idol system.</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">🚀 Keys to Global Success</h3>
                        <p>The systematic trainee system and digital-first marketing strategies have been crucial in building global fandoms.</p>
                    </article>
                )}
                {lang === 'ja' && (
                    <article>
                        <h3 className="text-text-primary text-lg font-bold mb-3">🌟 K-POPの歴史</h3>
                        <p className="mb-4">1992年のソ・テジ・アンド・ボーイズから始まりました。その後、H.O.Tなどがアイドル文化を築きました。</p>
                        <h3 className="text-text-primary text-lg font-bold mb-3 mt-6">🚀 グローバル成功の秘訣</h3>
                        <p>体系的な練習生システムとSNSの活用が、世界的なファンダム形成の鍵となりました。</p>
                    </article>
                )}
            </div>
        </section>
    );
}

export function DetailedSEOContent({ lang }: { lang: string }) {
    if (lang !== 'ko') return null; // We'll focus Korean for AdSense text volume as requested

    return (
        <section className="my-20 space-y-12 animate-fade-in-up">
            <div className="bg-bg-card border border-glass-border rounded-2xl p-8 md:p-12 shadow-neon-glow">
                <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-main mb-8">
                    AI K-POP 아이돌상 테스트의 과학적 원리
                </h2>
                <div className="space-y-6 text-text-secondary leading-loose text-base md:text-lg">
                    <p>
                        본 서비스의 <strong>AI 아이돌상 테스트</strong>는 최신 딥러닝 알고리즘과 컴퓨터 비전 기술을 기반으로 작동합니다. 사용자가 이미지를 업로드하면, 우리 AI 시스템은 즉각적으로 얼굴의 수천 가지 특징점을 분석합니다. 이를 '랜드마크 검출(Landmark Detection)'이라고 하며, 눈의 가로세로 비율, 코의 각도, 입술의 두께, 그리고 턱선부터 이마까지 이어지는 전반적인 얼굴형인 '황금 비율'을 정밀하게 측정합니다.
                    </p>
                    <p>
                        이렇게 수집된 데이터는 실제 활동 중인 수천 명의 K-POP 아이돌 데이터베이스와 대조됩니다. 단순히 눈매가 닮은 것을 넘어, 이미지 인식을 통해 얼굴의 골격 구조, 근육의 분포, 그리고 표정에서 나타나는 분위기(Vibe)까지 수치화하여 가장 유사한 아이돌을 찾아냅니다. 이는 단순한 재미를 넘어, 예술적 조화와 기술적 분석이 결합된 고도의 분석 엔진입니다.
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-bg-card border border-glass-border rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-accent-cyan mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-neon-glow"></span>
                        퍼스널 컬러별 특징 및 스타일링
                    </h3>
                    <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
                        <p><strong>봄 웜톤 (Spring Warm):</strong> 화사하고 생기 넘치는 노란색 베이스의 피부톤이 특징입니다. 아이유나 수지처럼 선명하고 밝은 코랄, 복숭아 빛이 잘 어울리며 골드 액세서리로 포인트를 주면 얼굴의 혈색이 더욱 살아납니다.</p>
                        <p><strong>여름 쿨톤 (Summer Cool):</strong> 맑고 깨끗하며 핑크빛이 도는 피부톤입니다. 트와이스의 나연이나 아이브의 원영처럼 파스텔 톤의 블루, 라벤더, 로즈 핑크 계열이 베스트이며 실버나 화이트 골드가 세련미를 더해줍니다.</p>
                        <p><strong>가을 웜톤 (Autumn Warm):</strong> 차분하고 고혹적인 구릿빛이나 깊은 베이지 톤의 피부입니다. 블랙핑크의 제니처럼 테라코타, 머스타드, 딥 브라운 등 무거운 지구 색(Earth Tone)이 어우러질 때 가장 매력적입니다.</p>
                        <p><strong>겨울 쿨톤 (Winter Cool):</strong> 명도가 높고 카리스마 있는 차가운 피부톤입니다. 에스파의 카리나처럼 선명한 블랙, 화이트, 딥 퍼플, 마젠타 등 강렬한 대비가 느껴지는 색상을 통해 도시적이고 세련된 이미지를 극대화할 수 있습니다.</p>
                    </div>
                </div>

                <div className="bg-bg-card border border-glass-border rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-accent-pink mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-pink shadow-neon-glow"></span>
                        자주 묻는 질문 (FAQ)
                    </h3>
                    <div className="space-y-4 text-sm text-text-secondary">
                        <details className="group cursor-pointer border-b border-glass-border pb-4 last:border-0 last:pb-0">
                            <summary className="font-bold text-text-primary list-none flex justify-between items-center">
                                Q1. 제 사진은 안전하게 보호되나요?
                                <span className="text-accent-pink group-open:rotate-180 transition-transform text-xs">▲</span>
                            </summary>
                            <p className="mt-3 text-xs leading-relaxed opacity-80">A1. 네, 본 서비스는 보안을 최우선으로 합니다. 입력된 이미지는 분석 즉시 서버에서 삭제되며, 어떤 용도로도 저장되거나 재사용되지 않습니다.</p>
                        </details>
                        <details className="group cursor-pointer border-b border-glass-border pb-4 last:border-0 last:pb-0">
                            <summary className="font-bold text-text-primary list-none flex justify-between items-center">
                                Q2. 결과가 얼마나 정확한가요?
                                <span className="text-accent-pink group-open:rotate-180 transition-transform text-xs">▲</span>
                            </summary>
                            <p className="mt-3 text-xs leading-relaxed opacity-80">A2. AI 기술을 통한 유사도 측정은 수치적으로 매우 정밀하지만, 조명이나 촬영 각도에 따라 결과가 달라질 수 있습니다. 여러 장의 사진으로 테스트해보는 것을 권장합니다.</p>
                        </details>
                        <details className="group cursor-pointer border-b border-glass-border pb-4 last:border-0 last:pb-0">
                            <summary className="font-bold text-text-primary list-none flex justify-between items-center">
                                Q3. 아이돌 데이터는 언제 업데이트되나요?
                                <span className="text-accent-pink group-open:rotate-180 transition-transform text-xs">▲</span>
                            </summary>
                            <p className="mt-3 text-xs leading-relaxed opacity-80">A3. 우리는 정기적으로 최신 데뷔한 신인 그룹부터 전 세대를 아우르는 아이돌 리스트를 업데이트하고 있습니다. 최신 트렌드를 반영한 결과를 제공합니다.</p>
                        </details>
                    </div>
                </div>
            </div>

            <div className="bg-glass/30 border-l-4 border-accent-purple p-8 rounded-r-2xl">
                <h3 className="text-lg font-bold text-white mb-4 italic">Editor's Note: K-POP과 뷰티 시너지</h3>
                <p className="text-sm text-text-secondary leading-loose">
                    K-POP은 이제 단순한 음악 장르를 넘어 하나의 라이프스타일이자 뷰티 아이콘으로 자리 잡았습니다. 아이돌들이 선보이는 퍼스널 컬러 메이크업과 얼굴형에 따른 헤어 스타일링은 전 세계 수많은 팬에게 영감을 줍니다. 본 서비스를 통해 자신의 숨겨진 매력을 발견하고, 자신만의 '아이돌 지수'를 높여보세요. 당신의 고유한 아름다움은 어떤 조명 아래에서도 빛날 가치가 있습니다. 우리는 기술을 통해 당신의 그 특별함을 증명하고자 합니다.
                </p>
                <p className="text-sm text-text-secondary leading-loose mt-4">
                    인공지능이 제안하는 스타일 가이드는 당신의 패션과 뷰티 선택에 있어 훌륭한 나침반이 될 것입니다. 지금 바로 무료로 테스트를 시작하고, 친구들과 결과를 공유하여 당신의 '아이돌 닮은꼴'이 누구인지 확인해보세요!
                </p>
            </div>
        </section>
    );
}
