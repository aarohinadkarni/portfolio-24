/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "#144C32",
        purple: "#37123C",
        pink: "#B9314F"
      },
      fontFamily: { work: ['Work Sans', 'sans-serif'] },
    },
  },
  plugins: [],
};
