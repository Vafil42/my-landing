import { style } from "@vanilla-extract/css";

export const wrapperStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "100%",
});

export const rowStyles = style({
  display: "flex",
  flexDirection: "row",
  gap: 16,
});
