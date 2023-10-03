import { type Config } from "tailwindcss";
import { config as snippetsPreset } from "@snippets/tailwind";

export const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  presets: [snippetsPreset],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
