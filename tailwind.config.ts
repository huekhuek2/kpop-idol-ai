import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Custom Neon Palette
                "neon-pink": "#ff2d78",
                "neon-purple": "#a855f7",
                "neon-blue": "#3b82f6",
                "neon-cyan": "#06b6d4",
                "bg-primary": "#0a0a0f",
                "bg-secondary": "#12121a",
                "bg-card": "rgba(255, 255, 255, 0.04)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-main": "linear-gradient(135deg, #ff2d78, #a855f7, #3b82f6)",
                "gradient-glow": "linear-gradient(135deg, rgba(255, 45, 120, 0.3), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))",
            },
            animation: {
                "glow-shift": "glowShift 12s ease-in-out infinite alternate",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "spin-slow": "spin 3s linear infinite",
            },
            keyframes: {
                glowShift: {
                    "0%": { opacity: "0.6" },
                    "100%": { opacity: "1" },
                }
            }
        },
    },
    plugins: [],
};
export default config;
