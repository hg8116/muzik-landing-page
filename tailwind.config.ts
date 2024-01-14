import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme" // Import the default theme

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        abel: ["Abel", ...defaultTheme.fontFamily.sans],
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
        playfair: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        robotoMono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        bebasNeue: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
      },
    },
  },
  plugins: [],
}

export default config
