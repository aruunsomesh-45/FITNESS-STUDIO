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
                primary: {
                    DEFAULT: "#ccff00", // Electric Green
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "#1a1a1a",
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#2a2a2a",
                    foreground: "#a1a1aa",
                },
                accent: {
                    DEFAULT: "#ccff00",
                    foreground: "#000000",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-oswald)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
