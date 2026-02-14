import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function compressImage(dataUrl: string, maxSize = 1024, quality = 0.75): Promise<string> {
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
            if (ctx) {
                ctx.drawImage(img, 0, 0, width, height);
                const compressed = canvas.toDataURL('image/jpeg', quality);
                resolve(compressed);
            } else {
                reject(new Error("Could not get canvas context"));
            }
        };
        img.onerror = reject;
        img.src = dataUrl;
    });
}
