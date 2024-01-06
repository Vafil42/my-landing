import { globalTheme } from "@/views/AppView/style.css";
import { style } from "@vanilla-extract/css";

export const textStyles = style({
  color: globalTheme.textColor.white,
  "@media": {
    "screen and (orientation: portrait)": {
      fontSize: "11rem",
      textAlign: "center",
    },
    "screen and (orientation: landscape)": {
      fontSize: "7rem",
    },
  },
});

export const wrapperStyles = style({
  marginBottom: 50,
});
