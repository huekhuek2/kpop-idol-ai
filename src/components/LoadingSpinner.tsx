import { motion } from 'framer-motion';

export function LoadingSpinner({ text }: { text: string }) {
    return (
        <div className="text-center py-12">
            <div className="relative w-16 h-16 mx-auto mb-6">
                <motion.div
                    className="absolute inset-0 border-4 border-transparent border-t-accent-pink border-r-accent-purple rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <motion.p
                className="text-text-secondary font-medium animate-pulse"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
                {text}
            </motion.p>
        </div>
    );
}
