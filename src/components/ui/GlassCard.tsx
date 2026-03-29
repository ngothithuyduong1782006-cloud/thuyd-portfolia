import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    gradientClassName?: string;
}

export const GlassCard = ({ children, className, gradientClassName }: GlassCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement for the spotlight
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top } = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "relative overflow-hidden glass-card group/glass transition-colors",
                className
            )}
        >
            {/* Interactive Spotlight Glow */}
            <motion.div
                className={cn(
                    "absolute inset-0 pointer-events-none transition-opacity duration-300",
                    isHovered ? "opacity-100" : "opacity-0"
                )}
                style={{
                    background: useTransform(
                        [smoothX, smoothY],
                        ([x, y]) => `radial-gradient(450px circle at ${x}px ${y}px, hsla(210, 100%, 60%, 0.25) 0%, transparent 65%)`
                    ),
                }}
            />

            {/* Static Glow as fallback/backup */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/glass:opacity-50 transition-opacity duration-500 pointer-events-none",
                gradientClassName
            )} />

            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};
