import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { fontSans, fontMono } from "@/config/fonts";

export const theme = extendTheme(
  {
    components: {
      Button: {
        baseStyle: {
          fontWeight: "medium",
        },
      },
    },
    fonts: {
      body: fontSans.style.fontFamily,
    },
    fontSizes: {
      xs: "0.65rem",
      sm: "0.75rem",
      md: "0.875rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  withDefaultColorScheme({
    colorScheme: "red",
  })
);
