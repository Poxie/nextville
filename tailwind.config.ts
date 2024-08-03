import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'divider-gradient': 'linear-gradient(90deg, #FCC38300 0%, #FCC383 50%, #FCC38300 100%)',
      },
      backgroundColor: {
        primary: '#fff',
        secondary: '#F2F2F2',
        tertiary: '#E7E7E7',
        quaternary: '#C9C9C9',
        dark: '#000',
      },
      borderColor: {
        primary: '#fff',
        secondary: '#F2F2F2',
        tertiary: '#E7E7E7',
        quaternary: '#C9C9C9',
        'c-primary': '#FCC383',
      },
      textColor: {
        primary: '#0f172a',
        secondary: '#475569',
        light: '#fff',
      },
      width: {
        main: '1200px',
      },
      maxWidth: {
        main: '90%',
      },
    },
  },
  plugins: [],
};
export default config;
