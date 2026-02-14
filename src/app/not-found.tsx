import Link from 'next/link';
import { Button } from '@/components/ui-components';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-white p-5 text-center">
            <div className="bg-glow opacity-50"></div>
            <h1 className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-main">404</h1>
            <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
            <p className="text-text-secondary mb-10 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/">
                <Button variant="primary" className="px-8">
                    Go Back Home
                </Button>
            </Link>
        </div>
    );
}
