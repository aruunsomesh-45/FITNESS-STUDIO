import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps extends HTMLMotionProps<"div"> {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export function SplitText({ text, className, delay = 0, duration = 0.05, ...props }: SplitTextProps) {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={cn("inline-block", className)}
            {...props}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                    className="whitespace-nowrap"
                >
                    {word.split("").map((character, j) => (
                        <motion.span
                            key={j}
                            style={{ display: "inline-block" }}
                            variants={child}
                        >
                            {character}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </motion.div>
    );
}
