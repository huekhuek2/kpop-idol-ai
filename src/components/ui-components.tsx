import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
        primary: 'bg-gradient-main text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300',
        secondary: 'bg-bg-secondary text-text-primary border border-glass-border hover:bg-glass hover:border-accent-purple',
        outline: 'border-2 border-glass-border text-text-secondary hover:text-white hover:border-accent-pink bg-transparent',
        ghost: 'bg-transparent text-text-secondary hover:text-white',
        neon: 'bg-transparent border border-neon-pink text-neon-pink shadow-[0_0_10px_rgba(255,45,120,0.3)] hover:shadow-[0_0_20px_rgba(255,45,120,0.6)] hover:bg-neon-pink/10',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-6 py-3 text-sm font-semibold',
        lg: 'px-8 py-4 text-base font-bold',
    };

    return (
        <button
            ref={ref}
            className={cn(
                'rounded-2xl inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
});
Button.displayName = 'Button';

export const Card = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(({ className, children, ...props }, ref) => (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
            'bg-bg-secondary border border-glass-border rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm',
            className
        )}
        {...props}
    >
        {children}
    </motion.div>
));
Card.displayName = 'Card';
