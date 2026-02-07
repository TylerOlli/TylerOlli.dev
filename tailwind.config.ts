import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        // Tech Stack semantic accent colors
        'accent-core': 'rgb(var(--accent-core) / <alpha-value>)',
        'accent-ui': 'rgb(var(--accent-ui) / <alpha-value>)',
        'accent-ui-light': 'rgb(var(--accent-ui-light) / <alpha-value>)',
        'accent-ui-dark': 'rgb(var(--accent-ui-dark) / <alpha-value>)',
        'accent-ui-mid': 'rgb(var(--accent-ui-mid) / <alpha-value>)',
        'accent-data': 'rgb(var(--accent-data) / <alpha-value>)',
        'accent-data-light': 'rgb(var(--accent-data-light) / <alpha-value>)',
        'accent-data-dark': 'rgb(var(--accent-data-dark) / <alpha-value>)',
        'accent-data-mid': 'rgb(var(--accent-data-mid) / <alpha-value>)',
        'accent-ai': 'rgb(var(--accent-ai) / <alpha-value>)',
        'accent-ai-light': 'rgb(var(--accent-ai-light) / <alpha-value>)',
        'accent-ai-dark': 'rgb(var(--accent-ai-dark) / <alpha-value>)',
        'accent-ai-mid': 'rgb(var(--accent-ai-mid) / <alpha-value>)',
        
        // Semantic Neutral System
        ui: {
          // Surfaces
          'bg-page': 'rgb(var(--ui-bg-page) / <alpha-value>)',
          'bg-surface': 'rgb(var(--ui-bg-surface) / <alpha-value>)',
          'bg-surface-subtle': 'rgb(var(--ui-bg-surface-subtle) / <alpha-value>)',
          'bg-surface-muted': 'rgb(var(--ui-bg-surface-muted) / <alpha-value>)',
          'bg-inverse': 'rgb(var(--ui-bg-inverse) / <alpha-value>)',
          
          // Text
          'text-primary': 'rgb(var(--ui-text-primary) / <alpha-value>)',
          'text-secondary': 'rgb(var(--ui-text-secondary) / <alpha-value>)',
          'text-tertiary': 'rgb(var(--ui-text-tertiary) / <alpha-value>)',
          'text-muted': 'rgb(var(--ui-text-muted) / <alpha-value>)',
          'text-inverse': 'rgb(var(--ui-text-inverse) / <alpha-value>)',
          
          // Borders
          'border-subtle': 'rgb(var(--ui-border-subtle) / <alpha-value>)',
          'border-default': 'rgb(var(--ui-border-default) / <alpha-value>)',
          'border-strong': 'rgb(var(--ui-border-strong) / <alpha-value>)',
          
          // Interactive
          'hover-subtle': 'rgb(var(--ui-hover-subtle) / <alpha-value>)',
          'hover-default': 'rgb(var(--ui-hover-default) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
