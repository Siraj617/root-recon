import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        rootrec: "#FF5C5C",
      },
    },
  },
 content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
    
};

export default config;
