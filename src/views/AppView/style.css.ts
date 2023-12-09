import {
  createGlobalTheme,
  globalStyle,
  globalFontFace,
} from "@vanilla-extract/css";

export const globalTheme = createGlobalTheme(":root", {
  color: {
    primary: {
      light: "#F9BB72",
      dark: "#F8A442",
    },
    white: "#FFF",
  },
  textColor: {
    black: "black",
    grey: "grey",
  },
});

globalFontFace("ubuntu-mono", {
  src: "url('/UbuntuMono.woff2') format('woff2')",
});

globalStyle("body, html", {
  margin: 0,
  padding: 0,
  fontSize: "62.5%",
  fontFamily: "ubuntu-mono",
  backgroundColor: globalTheme.color.primary.light,
  paddingBottom: 500,
});
