import { motion } from 'framer-motion';
import { Card, Button } from '@/components/ui-components';
import { Download, Share2, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import html2canvas from 'html2canvas';

interface ResultCardProps {
    result: any;
    translations: any;
}

export function ResultCard({ result, translations }: ResultCardProps) {
    if (!result) return null;

    const { personalColor, idolMatches, facialFeatures, compliment } = result;

    const handleShareTwitter = () => {
        const text = translations.tweetText.replace('{idol}', idolMatches[0]?.name || 'K-POP Idol');
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleSaveImage = async () => {
        const element = document.getElementById('result-card-content');
        if (element) {
            try {
                const canvas = await html2canvas(element, { backgroundColor: '#12121a', scale: 2, useCORS: true } as any);
                const link = document.createElement('a');
                link.download = 'kpop-idol-result.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            } catch (e) {
                console.error('Save failed', e);
            }
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText('https://kpop-idol-ai.vercel.app/');
        alert(translations.linkCopied);
    };

    return (
        <Card id="result-card-content" className="w-full max-w-2xl mx-auto my-8">
            <div className="bg-gradient-glow p-6 text-center border-b border-glass-border">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-1">
                    {translations.resultTitle}
                </h2>
                <p className="text-sm text-text-secondary">{translations.resultSubtitle}</p>
            </div>

            <div className="p-6 space-y-8">
                {/* Personal Color Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <span className="inline-block px-6 py-2 rounded-full bg-gradient-main text-white font-bold text-lg shadow-lg mb-3">
                        {personalColor.season}
                    </span>
                    <p className="text-accent-cyan text-sm font-medium mb-4">{personalColor.subtype}</p>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto mb-6">
                        {personalColor.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-text-secondary mb-2">{translations.bestColors}</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {personalColor.bestColors?.map((c: string, i: number) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-glass-border hover:scale-110 transition-transform" style={{ backgroundColor: c }} title={c} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider text-text-secondary mb-2">{translations.avoidColors}</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {personalColor.avoidColors?.map((c: string, i: number) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-glass-border hover:scale-110 transition-transform" style={{ backgroundColor: c }} title={c} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Idol Matches */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-lg font-bold text-center mb-4 text-gradient">{translations.idolTitle}</h3>
                    <div className="space-y-3">
                        {idolMatches.map((idol: any, i: number) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-glass rounded-xl border border-glass-border hover:bg-accent-purple/10 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gradient-main flex items-center justify-center font-bold text-white shrink-0">
                                    {i + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <p className="font-bold truncate">{idol.name}</p>
                                        <span className="text-xs text-accent-cyan font-medium">{idol.group}</span>
                                    </div>
                                    <p className="text-xs text-text-secondary line-clamp-2">{idol.matchReason}</p>
                                </div>
                                <div className="text-lg font-bold text-gradient shrink-0 w-12 text-right">
                                    {idol.matchPercentage}%
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Compliment */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-5 bg-gradient-glow/20 border border-glass-border rounded-xl text-center italic text-sm leading-loose"
                >
                    ✨ {compliment} ✨
                </motion.div>

                {/* Facial Features Grid */}
                {facialFeatures && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                        <FeatureItem label={translations.featureFace} value={facialFeatures.faceShape} />
                        <FeatureItem label={translations.featureEye} value={facialFeatures.eyeShape} />
                        <FeatureItem label={translations.featureNose} value={facialFeatures.noseShape} />
                        <FeatureItem label={translations.featureLip} value={facialFeatures.lipShape} />
                        <div className="col-span-2">
                            <FeatureItem label={translations.featureVibe} value={facialFeatures.overallVibe} />
                        </div>
                    </div>
                )}
            </div>

            {/* Actions - visible in download */}
            <div className="p-6 bg-glass border-t border-glass-border flex flex-wrap justify-center gap-2">
                <Button variant="secondary" size="sm" onClick={handleShareTwitter}>
                    <Share2 size={16} /> Twitter
                </Button>
                <Button variant="primary" size="sm" onClick={handleSaveImage}>
                    <Download size={16} /> Save Image
                </Button>
                <Button variant="secondary" size="sm" onClick={handleCopyLink}>
                    <Copy size={16} /> Copy Link
                </Button>
            </div>
        </Card>
    );
}

function FeatureItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="bg-glass p-3 rounded-lg border border-glass-border">
            <div className="text-accent-purple font-semibold mb-1 uppercase text-[10px] tracking-wider">{label}</div>
            <div className="text-text-primary/90">{value}</div>
        </div>
    );
}
