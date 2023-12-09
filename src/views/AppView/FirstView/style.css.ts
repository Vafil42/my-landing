import { style } from "@vanilla-extract/css";
import { globalTheme } from "../style.css";

export const wrapperStyles = style({
  display: "flex",
  width: "100vw",
  height: "100vh",
  background: `linear-gradient(103deg, ${globalTheme.color.white} 49.07%, ${globalTheme.color.primary.dark} 104.96%)`,
  justifyContent: "space-between",
});

export const photoStyles = style({
  height: "100vh",
});

export const photoWrapperStyles = style({
  display: "flex",
  width: "max-content",
});

export const textWrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  marginLeft: 100,
});

export const titleStyles = style({
  fontSize: "7rem",
  borderBottom: `5px solid ${globalTheme.color.primary.light}`,
  width: "max-content",
});

export const subtitleStyles = style({
  fontSize: "3rem",
  marginRight: 100,
  marginTop: 10,
});
