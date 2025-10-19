module.exports = {
  // Your content paths to scan for Tailwind classes
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  // Your theme configuration, including extensions
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        times: ["Times New Roman", "serif"],
        cinzel: ["Cinzel", "serif"],
        sanspro: ['"Source Sans Pro"', "serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        "scroll-pause": "scroll 10s linear infinite paused",
      },
    },
  },
  // Your plugins
  plugins: [require("@tailwindcss/aspect-ratio")],
};
