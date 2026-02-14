import type { Metadata, Viewport } from "next";
// import { Outfit, Noto_Sans_KR, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

// Note: Loading google fonts can be tricky if network is restricted during dev, 
// strictly speaking we should use next/font/google but for now I'll use standard import in CSS or try to use next/font if possible.
// Let's use standard next/font/google

/*
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], variable: "--font-noto-kr" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], variable: "--font-noto-jp" });
*/

export const metadata: Metadata = {
    title: "K-POP Idol AI - Personal Color & Lookalike",
    description: "AI-powered personal color diagnosis and K-POP idol lookalike matching.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* We will handle dynamic language in the page itself or via context, but html lang might need to be dynamic if we were doing i18n routing. 
        For this single-page app style migration, we'll keep it simple. */}
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700;900&family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5738808153705639" crossOrigin="anonymous"></script>
            </head>
            <body className={clsx("min-h-screen antialiased")}>
                <div className="bg-glow"></div>
                {children}
            </body>
        </html>
    );
}
