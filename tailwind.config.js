/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "float-up": {
          "0%": {
            opacity: "1",
            transform: "translateY(0) translateX(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-100vh) translateX(var(--tx))",
          },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.3)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "float-up": "float-up 2s linear forwards",
        heartbeat: "heartbeat 0.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
