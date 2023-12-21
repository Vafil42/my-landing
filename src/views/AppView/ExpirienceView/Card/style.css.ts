import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../style.css";

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: 5,
});

export const headerStyles = style({
  display: "flex",
  flexDirection: "row",
  color: "black",
  width: "90%",
  borderBottom: `3px solid ${globalTheme.color.primary.dark}`,
  paddingTop: 10,
  paddingBottom: 10,
});

export const textStyles = style({
  fontSize: "2.2rem",
  color: "black",
  width: "90%",
  paddingTop: 20,
  paddingBottom: 30,
});

export const titleStyles = style({
  fontSize: "4rem",
  color: globalTheme.textColor.black,
  textDecoration: "none",
});

export const repoStyles = style({
  fontSize: "2.2rem",
  color: globalTheme.textColor.grey,
  textDecoration: "none",
  alignSelf: "flex-end",
  flex: 1,
});

export const emptyStyles = style({
  flex: 1,
});
