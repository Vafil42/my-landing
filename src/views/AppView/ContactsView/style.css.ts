import { style } from "@vanilla-extract/css";

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "100%",
});

export const rowStyles = style({
  display: "flex",
  gap: 16,
  "@media": {
    "screen and (orientation: portrait)": {
      flexDirection: "column",
    },
    "screen and (orientation: landscape)": {
      flexDirection: "row",
    },
  },
});
