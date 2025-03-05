import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  content: {
    files: [
      // all directories and extensions will correspond to your Nuxt config
      "./components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./plugins/**/*.{js,ts,mjs}",
      "./composables/**/*.{js,ts,mjs}",
      "./utils/**/*.{js,ts,mjs}",
      "./{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "./{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "./app.config.{js,ts,mjs}",
      "./app/spa-loading-template.html",
      "./features/**/*.{vue,js,ts,mis}",
    ],
  },

  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
  			foreground: 'var(--foreground)',
        primary: colors.green,
        secondary: {
          "300": "#E3FCFF",
          "500": "#079BEE",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "var(--muted-foreground)",
        },
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        playfair: ['Playfair Display']
      }
    },
  },
};
