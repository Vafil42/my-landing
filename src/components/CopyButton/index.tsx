"use client";

import { useState } from "react";
import Icon from "../Icon";
import { buttonStyles } from "./style.css";

interface CopyButtonInterface {
  copyText: string;
  size?: "1x" | "1.5x" | "2x" | "2.5x" | "3x";
}

export const CopyButton = ({ copyText, size }: CopyButtonInterface) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(copyText);
    setCopied(true);
  };

  return (
    <button onClick={handleCopyClick} className={buttonStyles}>
      <Icon
        type={copied ? "check-line" : "clipboard-line"}
        size={size ?? "1.5x"}
      />
    </button>
  );
};
