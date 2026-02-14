"use client";

import { useState, useRef } from 'react';
import { TRANSLATIONS } from '@/lib/constants';
import { compressImage, cn } from '@/lib/utils';
import { Button } from '@/components/ui-components';
import { FileUpload } from '@/components/FileUpload';
import { ResultCard } from '@/components/ResultCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { KBeautyGuide, InsightsSection, DetailedSEOContent } from '@/components/StaticContent';
import { Sparkles, Camera } from 'lucide-react';

type Lang = keyof typeof TRANSLATIONS;

export default function Home() {
    const [lang, setLang] = useState<Lang>('ko');
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [loadingStep, setLoadingStep] = useState<string>(''); // For loading text updates

    const t = TRANSLATIONS[lang];

    const handleAnalyze = async () => {
        if (!image) return;
        setLoading(true);
        setResult(null);
        setLoadingStep(t.optimizingText);

        try {
            // 1. Optimize Image
            const compressed = await compressImage(image);

            // 2. Send to API
            setLoadingStep(t.loadingText);
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    image: compressed,
                    gender,
                    lang
                })
            });

            if (!res.ok) throw new Error("API Error");
            const data = await res.json();
            setResult(data);
        } catch (e) {
            alert(t.errorMsg);
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const resetAnalysis = () => {
        setResult(null);
        setImage(null);
    };

    return (
        <div className="container relative z-10 max-w-3xl mx-auto px-5 py-10 min-h-screen flex flex-col items-center">
            {/* Language Bar (Sticky) */}
            <nav className="sticky top-0 z-50 flex gap-1 p-3 bg-bg-primary/80 backdrop-blur-xl border-b border-glass-border w-full justify-center mb-8 rounded-b-2xl">
                {(['ko', 'en', 'ja'] as Lang[]).map((l) => (
                    <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-xs font-medium transition-all border border-transparent",
                            lang === l
                                ? "bg-gradient-main text-white shadow-lg"
                                : "bg-glass text-text-secondary hover:bg-glass-border border-glass-border"
                        )}
                    >
                        {l === 'ko' ? '한국어' : l === 'en' ? 'English' : '日本語'}
                    </button>
                ))}
            </nav>

            {/* Hero */}
            <section className="text-center mb-10 animate-fade-in-up">
                <span className="inline-block px-4 py-1.5 rounded-full bg-glass border border-glass-border text-accent-purple text-xs uppercase tracking-wider mb-4 animate-pulse-slow">
                    {t.badge}
                </span>
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-main leading-tight">
                    {t.title}
                </h1>
                <p className="text-text-secondary text-base md:text-lg max-w-md mx-auto leading-relaxed">
                    {t.subtitle}
                </p>
            </section>

            {/* Main Interaction Area */}
            <div className="w-full max-w-md mx-auto space-y-6">

                {/* Upload */}
                {!result && !loading && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <FileUpload
                            translations={t}
                            onFileSelect={setImage}
                        />
                    </div>
                )}

                {/* Gender Selection */}
                {!result && !loading && (
                    <div className="flex justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <button
                            onClick={() => setGender('male')}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-bold transition-all border border-glass-border",
                                gender === 'male'
                                    ? "bg-gradient-main text-white shadow-lg scale-105"
                                    : "bg-glass text-text-secondary hover:bg-glass-border"
                            )}
                        >
                            {t.male}
                        </button>
                        <button
                            onClick={() => setGender('female')}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-bold transition-all border border-glass-border",
                                gender === 'female'
                                    ? "bg-gradient-main text-white shadow-lg scale-105"
                                    : "bg-glass text-text-secondary hover:bg-glass-border"
                            )}
                        >
                            {t.female}
                        </button>
                    </div>
                )}

                {/* Analyze Button */}
                {!result && !loading && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Button
                            variant="primary"
                            className="w-full py-4 text-base shadow-neon-glow"
                            disabled={!image}
                            onClick={handleAnalyze}
                        >
                            <Sparkles className="w-5 h-5 animate-pulse" />
                            {t.analyzeBtn}
                        </Button>
                    </div>
                )}

                {/* Detailed SEO Content for AdSense */}
                {!result && !loading && (
                    <DetailedSEOContent lang={lang} />
                )}

                {/* Loading State */}
                {loading && (
                    <div className="py-10">
                        <LoadingSpinner text={loadingStep} />
                    </div>
                )}
            </div>

            {/* Results */}
            {result && (
                <div className="w-full animate-fade-in-up">
                    <ResultCard result={result} translations={t} />
                    <div className="text-center mt-8">
                        <Button variant="outline" onClick={resetAnalysis}>
                            {t.retryBtn}
                        </Button>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <a
                            href="https://beauty-ai.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-main rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
                            <div className="relative bg-bg-secondary border border-accent-pink/50 rounded-2xl p-6 flex flex-col items-center">
                                <span className="text-3xl mb-2">💎</span>
                                <span className="text-lg font-bold text-white mb-1">{t.ctaBtnText}</span>
                                <span className="text-sm text-text-secondary group-hover:text-accent-pink transition-colors">{t.ctaBtnSub}</span>
                            </div>
                        </a>
                    </div>
                </div>
            )}

            {/* Static Sections */}
            {!loading && !result && (
                <div className="w-full max-w-2xl mx-auto mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <KBeautyGuide lang={lang} translations={t} />
                    <InsightsSection lang={lang} translations={t} />
                </div>
            )}

            {/* Footer */}
            <footer className="mt-20 text-center text-xs text-text-secondary py-8 border-t border-glass-border w-full">
                <p>{t.footerText}</p>
                <div className="mt-2 space-x-4">
                    <a href="/legacy_html/privacy.html" target="_blank" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/legacy_html/terms.html" target="_blank" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </footer>

        </div>
    );
}
