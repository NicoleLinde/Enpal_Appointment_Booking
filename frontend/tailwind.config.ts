import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#072543',
                'primary-hover': '#0A2C5B',
                secondary: '#FFD233',
                neutral: '#FBFCFC',
                'neutral-content': '#F9F9F9',
                base: '#E9EEF0',
                disabled: '#AFB3B4',
            },
        },
    },
    plugins: [],
};
export default config;
