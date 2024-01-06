import {
  createGlobalTheme,
  globalStyle,
  globalFontFace,
  style,
} from "@vanilla-extract/css";

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 100,
});

export const globalTheme = createGlobalTheme(":root", {
  color: {
    primary: {
      light: "#B38EC8",
      dark: "#A566C8",
    },
    white: "#FFF",
  },
  textColor: {
    black: "2A093C",
    grey: "grey",
    white: "#FFF",
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
  paddingBottom: 50,
  color: globalTheme.textColor.black,
});
