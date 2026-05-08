/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          default: "#0d1117",
          subtle: "#010409",
          inset: "#010409",
          overlay: "#151b23",
        },
        bd: {
          default: "#30363d",
          muted: "#21262d",
        },
        fg: {
          default: "#e6edf3",
          muted: "#9198a1",
          subtle: "#6e7681",
        },
        accent: {
          fg: "#4493f8",
          emphasis: "#1f6feb",
          subtle: "rgba(56,139,253,0.15)",
        },
        success: {
          fg: "#3fb950",
          emphasis: "#238636",
        },
        attention: {
          fg: "#d29922",
        },
        danger: {
          fg: "#f85149",
        },
        contrib: {
          0: "#161b22",
          1: "#0e4429",
          2: "#006d32",
          3: "#26a641",
          4: "#39d353",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Noto Sans"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          '"SF Mono"',
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
