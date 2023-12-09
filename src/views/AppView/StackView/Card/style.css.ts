import { globalTheme } from "../../style.css";
import { style } from "@vanilla-extract/css";

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: globalTheme.color.white,
  width: "27vw",
  borderRadius: 5,
});

export const titleStyles = style({
  fontSize: "4rem",
  color: globalTheme.textColor.black,
  width: "80%",
  borderBottom: `3px solid ${globalTheme.color.primary.dark}`,
  textAlign: "center",
});

export const listWrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  width: "85%",
  marginTop: 5,
  marginBottom: 30,
});

export const listElementStyles = style({
  fontSize: "2.2rem",
  color: globalTheme.textColor.black,
  marginTop: 5,
});
