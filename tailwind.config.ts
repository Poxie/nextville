import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      textColor: {
        primary: '#0f172a',
        secondary: '#475569',
        light: '#fff',
      },
      width: {
        main: '1100px',
      },
      maxWidth: {
        main: '90%',
      },
    },
  },
  plugins: [],
};
export default config;
