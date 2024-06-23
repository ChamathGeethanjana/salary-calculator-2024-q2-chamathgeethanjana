import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: {
          DEFAULT: "#0052EA",
          50: "#EDF8FF",
          100: "#D6EDFF",
          200: "#B5E1FF",
          300: "#83CFFF",
          400: "#48B3FF",
          500: "#1E8FFF",
          600: "#066EFF",
          700: "#0052EA",
          800: "#0845C5",
          900: "#0D3F9B",
          950: "#0E275D",
        },
        secondary: {
          DEFAULT: "#E4E4E7",
          50: "#f7f7f7",
          100: "#ebebee",
          200: "#e4e4e7",
          300: "#c5c5cb",
          400: "#a8a9b2",
          500: "#94939e",
          600: "#83828e",
          700: "#777580",
          800: "#64626b",
          900: "#535157",
          950: "#353437",
        },
        success: {
          DEFAULT: "#4ADE80",
          50: "#f0fdf5",
          100: "#dcfce8",
          200: "#bbf7d1",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55d",
          600: "#16a349",
          700: "#15803c",
          800: "#166533",
          900: "#14532b",
          950: "#052e14",
        },
        warning: {
          DEFAULT: "#EF4444",
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
