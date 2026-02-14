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
