/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#A8D8EA',
        'pastel-white': '#F7F9FC',
        'soft-black': '#2D3436'
      }
    },
  },
  plugins: [],
}