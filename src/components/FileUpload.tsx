import { useState, useRef } from 'react';
import { cn, compressImage } from '@/lib/utils';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
    onFileSelect: (file: string | null) => void;
    label?: string;
    description?: string;
    translations: any;
}

export function FileUpload({ onFileSelect, translations }: FileUploadProps) {
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = async (file: File) => {
        if (!file.type.startsWith('image/')) return;
        if (file.size > 10 * 1024 * 1024) {
            alert("File too large (max 10MB)");
            return;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            if (e.target?.result) {
                const result = e.target.result as string;
                setPreview(result);
                // We'll compress when analyzing, but can also pass crude version here
                onFileSelect(result);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files?.[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const clearImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreview(null);
        onFileSelect(null);
        if (inputRef.current) inputRef.current.value = '';
    };

    return (
        <div
            onClick={() => !preview && inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={cn(
                "relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer overflow-hidden group",
                isDragging ? "border-accent-purple bg-accent-purple/10" : "border-glass-border bg-bg-card hover:border-accent-purple/50 hover:bg-glass",
                preview ? "border-solid border-transparent p-0" : ""
            )}
        >
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />

            {preview ? (
                <div className="relative w-full h-[360px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    <button
                        onClick={clearImage}
                        className="absolute top-4 right-4 bg-accent-pink text-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
                    >
                        <X size={20} />
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 rounded-full bg-glass flex items-center justify-center mb-4 text-4xl group-hover:scale-110 transition-transform">
                        {translations.uploadIcon}
                    </div>
                    <p className="text-text-secondary font-medium mb-2" dangerouslySetInnerHTML={{ __html: translations.uploadText }}></p>
                    <p className="text-xs text-text-secondary opacity-70">{translations.uploadHint}</p>
                </div>
            )}
        </div>
    );
}
