import { style } from "@vanilla-extract/css";
import { globalTheme } from "../style.css";

export const wrapperStyles = style({
  display: "flex",
  flex: 1,
  background: `linear-gradient(103deg, ${globalTheme.color.white} 49.07%, ${globalTheme.color.primary.dark} 104.96%)`,
  justifyContent: "space-between",
  "@media": {
    "screen and (orientation: portrait)": {
      flexDirection: "column",
    },
    "screen and (orientation: landscape)": {
      flexDirection: "row",
    },
  },
});

export const photoStyles = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const photoWrapperStyles = style({
  display: "flex",
  flex: 1,
});

export const textWrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  "@media": {
    "screen and (orientation: portrait)": {
      marginLeft: 20,
      marginTop: 100,
    },
    "screen and (orientation: landscape)": {
      marginLeft: 100,
    },
  },
});

export const titleStyles = style({
  fontSize: "7rem",
  borderBottom: `5px solid ${globalTheme.color.primary.dark}`,
  width: "max-content",
});

export const subtitleStyles = style({
  fontSize: "2.5rem",
  marginTop: 10,
  "@media": {
    "screen and (orientation: portrait)": {
      marginRight: 20,
    },
    "screen and (orientation: landscape)": {
      marginRight: 100,
    },
  },
});
