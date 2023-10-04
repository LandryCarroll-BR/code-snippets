// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import { config as sharedConfig } from "tailwind-config/tailwind.config";

export const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "ui-",
  presets: [sharedConfig],
};
