"use client";

import { useCallback } from "react";
import { linkStyles } from "./style.css";

interface AnchorLinkInterface {
  children: React.ReactNode;
  href: string;
}

export default function AnchorLink({ children, href }: AnchorLinkInterface) {
  const handleClick = useCallback(() => {
    const element = document.getElementById(href);

    if (element)
      element.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [href]);

  return (
    <span onClick={handleClick} className={linkStyles}>
      {children}
    </span>
  );
}
