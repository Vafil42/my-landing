import { globalTheme } from "@/views/AppView/style.css";
import { style } from "@vanilla-extract/css";

export const headerStyles = style({
  borderBottom: `2px solid ${globalTheme.color.primary.dark}`,
  width: "100vw",
  backgroundColor: globalTheme.color.white,
  position: "fixed",
});

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "row",
  fontSize: "3rem",
  alignItems: "center",
  width: "auto",
  justifyContent: "space-between",
  "@media": {
    "screen and (orientation: portrait)": {
      marginLeft: 20,
      marginRight: 20,
    },
    "screen and (orientation: landscape)": {
      marginLeft: 100,
      marginRight: 100,
    },
  },
});

export const logoStyles = style({
  width: "5rem",
  height: "5rem",
  marginTop: "1rem",
  marginLeft: "6rem",
});

export const linksWrapperStyles = style({
  display: "flex",
  flexDirection: "row",
  gap: "6rem",
});
