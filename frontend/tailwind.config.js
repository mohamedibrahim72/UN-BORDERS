/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",   // أسود أنيق
        gold: "#d4af37",   // ذهبي ملكي
      },
    },
  },
  plugins: [],
}
