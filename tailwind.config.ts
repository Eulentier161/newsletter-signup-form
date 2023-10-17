import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      tomato: "#ff6257",
      "dark-slate-grey": "#242742",
      "charcoal-grey": "#36384e",
      grey: "#9294a0",
      white: "#ffffff",
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      xl: "40px"
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};
export default config;
