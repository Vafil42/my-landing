import { globalTheme } from "@/views/AppView/style.css";
import { style } from "@vanilla-extract/css";

export const textStyles = style({
  fontSize: "7rem",
  color: globalTheme.textColor.white,
  width: "max-content",
});

export const wrapperStyles = style({
  marginBottom: 50,
});