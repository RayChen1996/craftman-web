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
        primary: "#0E8A00", // 主色
        dark: "#121212", // 深色
        "black-transparent": "#0000009A", // 黑色透明度 9A
        "white-transparent-zero": "#FFFFFF00", // 白色透明度 00
        "black-transparent-62": "#00000062", // 黑色透明度 62
        "white-transparent-99": "#FFFFFF99", // 白色透明度 99
        "white-transparent-DE": "#FFFFFFDE", // 白色透明度 DE
      },
    },
  },
  plugins: [],
};
export default config;
