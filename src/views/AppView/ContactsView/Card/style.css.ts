import { style } from "@vanilla-extract/css";
import { globalTheme } from "../../style.css";

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: globalTheme.color.white,
  padding: 10,
  borderRadius: 5,
  flex: 1,
});

export const linkStyles = style({
  color: globalTheme.textColor.black,
  textDecoration: "none",
  "@media": {
    "screen and (orientation: portrait)": {
      fontSize: "4rem",
    },
    "screen and (orientation: landscape)": {
      fontSize: "3rem",
    },
  },
});
