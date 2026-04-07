import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10111F",
        sand: "#F6F1E8",
        gold: "#C89B5C",
        slate: "#5D667C",
        mist: "#DCE2EA",
        pine: "#0F3D33",
        ember: "#8A4B2A",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 17, 31, 0.10)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(200, 155, 92, 0.26), transparent 32%), radial-gradient(circle at bottom right, rgba(15, 61, 51, 0.18), transparent 28%)",
      },
      maxWidth: {
        site: "1180px",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
