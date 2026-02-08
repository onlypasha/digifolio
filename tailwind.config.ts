import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // Baris di bawah ini WAJIB ada agar folder components terdeteksi:
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFEAD3",
        brand: {
          light: "#EA7B7B",   // Soft Red
          medium: "#D25353",  // Medium Red
          dark: "#9E3B3B",    // Deep Red
        },
      },
    },
  },
  plugins: [],
};
export default config;