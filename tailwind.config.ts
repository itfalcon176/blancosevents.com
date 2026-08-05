import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FAF6ED",
          100: "#F4ECDB",
          200: "#E9D7B7",
          300: "#DDC293",
          400: "#D4AF37",
          500: "#C5A059",
          600: "#A8843F",
          700: "#86682E",
          800: "#654D22",
          900: "#4B3819",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
