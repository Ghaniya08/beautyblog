 import type { Config } from "tailwindcss";
const config: Config = {
  daisyui: {
		themes: ["autumn"],},
    darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        myWhite:"#FFFFF0",
        mybabypink: "#FCB96A",
        mylitpink:"#DF9F9F",
        mynormalpink:"#BB5769",
        mydarkpink:"#844257", 
        myverydarkpink: "#b9375e",
        myblack: "#000000",
      },
      keyframes: {
        'top-to-bottom': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'bottom-to-top': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
      },
      animation: {
        'move-top-to-bottom': 'top-to-bottom 12s linear infinite',
        'move-bottom-to-top': 'bottom-to-top 12s linear infinite',
      },
    },
  },
    plugins: [
      require('daisyui'),],}
export default config;