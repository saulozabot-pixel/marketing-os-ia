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
        'brand-primary': '#6366f1',
        'brand-secondary': '#a855f7',
        'brand-accent': '#ec4899',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        inter: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
};
export default config;
