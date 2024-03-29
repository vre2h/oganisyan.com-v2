const { spacing, fontFamily, screens } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.jsx",
    "./content/**/*.mdx",
    "./layouts/**/*.jsx",
    "./de-final-fictive-7",
    "./weird-tailwind",
    "./weird-tailwind-2",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: { xs: { max: "415px" }, ...screens },
      colors: {
        "blue-opaque": "rgb(13 42 148 / 18%)",
        "link-color": "#005ea5",
        "hover-color-dark": "rgba(249, 214, 121, 1)",
        "border-color": "rgba(0, 96, 160, 0.2)",
        "hover-border-color": "rgba(0, 96, 160, 0.8)",
        "hover-border-color-dark": "rgba(249, 214, 121, 1)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.gray-900"),
              transition: "500ms",
              borderBottom: `2px solid ${theme("colors.gray.200")}`,
              textDecoration: "none",
              paddingBottom: 2,
              "&:hover": {
                textDecoration: "none",
                borderBottom: `2px solid ${theme("colors.gray.900")}`,
              },
              code: { color: theme("colors.blue.400") },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.gray.100"),
              transition: "500ms",
              borderBottom: `2px solid ${theme("colors.gray.700")}`,
              textDecoration: "none",
              paddingBottom: 2,
              "&:hover": {
                textDecoration: "none",
                borderBottom: `2px solid ${theme("colors.gray.100")}`,
              },
              code: { color: theme("colors.blue.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.gray.100"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.300") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
