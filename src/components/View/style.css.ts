import { style } from "@vanilla-extract/css";

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
