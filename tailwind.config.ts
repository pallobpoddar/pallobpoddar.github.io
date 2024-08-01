import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "481px",
      md: "768px",
      lg: "1025px",
      xl: "1281px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      aquamarine: "#64ffda",
      "hawkes-blue": "#ccd6f6",
      manatee: "#8892b0",
      "echo-blue": "#a8b2d1",
      midnight: "#172a45",
      "black-pearl": "#0a192f",
      "dark-mint-green": "#64ffda12",
    },
    fontFamily: {
      sans: ["var(--font-calibre)"],
      mono: ["var(--font-sfMono)"],
    },
    fontSize: {
      "3xs": "0.67rem",
      "2xs": "0.72rem",
      xs: "0.78rem",
      sm: "0.94rem",
      base: "1rem",
      lg: "1.22rem",
      xl: "1.33rem",
      "2xl": "2.5rem",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
