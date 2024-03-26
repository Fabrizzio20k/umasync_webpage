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
        "mainBlue": {
          50: "#DBF4FF",
          100: "#B3E7FF",
          200: "#66CFFF",
          300: "#1AB6FF",
          400: "#008BCC",
          500: "#005780",
          600: "#004666",
          700: "#00344D",
          800: "#002333",
          900: "#001119",
          950: "#000A0F"
        }
      },
      fontFamily: {
        'earthFont': ['Earth Bold', 'sans-serif'],
      },
      maxWidth: {
        "1920": "1920px",
      },
      screens: {
        "xl": "2000px",
      },
    },
  },
  plugins: [],
};
export default config;
