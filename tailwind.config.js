/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#9d312e',
        'main-light': '#fff8f6',    
        'text': '#374151',       
        'light-dark': '#9ca3af', 
        'accent': '#10b981',      
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],           
  },
}}