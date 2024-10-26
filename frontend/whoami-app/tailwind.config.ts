import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_orange: "#EE6A43",
        custom_yellow: "#FBCB77",
        custom_blue: "#67BCF1",
        custom_beige: "#FCECDF",
        custom_pink: "#F99D90",
        custom_red: "#F05353",
      },
    },
  },
  plugins: [],
};
export default config;
