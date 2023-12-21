import { CopyButton } from "@/components/CopyButton";
import { linkStyles, wrapperStyles } from "./style.css";

export interface CardInterface {
  text: string;
  copy: string;
  isLink?: true;
}

export default function Card({ text, copy, isLink }: CardInterface) {
  return (
    <div className={wrapperStyles}>
      {isLink ? (
        <a href={copy} target="_blank" rel="noreferrer" className={linkStyles}>
          {text}
        </a>
      ) : (
        <span className={linkStyles}>{text}</span>
      )}
      <CopyButton copyText={copy} size="2x" />
    </div>
  );
}
