import { style } from "@vanilla-extract/css";

export const cardsWrapperStyles = style({
  display: "flex",
  justifyContent: "space-between",
  flex: 1,
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
