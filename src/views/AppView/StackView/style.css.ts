import { style } from "@vanilla-extract/css";
import { globalTheme } from "../style.css";

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  marginLeft: 100,
  marginRight: 100,
  marginTop: 100,
  alignItems: "center",
});

export const titleStyles = style({
  fontSize: "7rem",
  color: globalTheme.color.white,
  width: "max-content",
  marginBottom: 50,
});

export const cardsWrapperStyles = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
});
