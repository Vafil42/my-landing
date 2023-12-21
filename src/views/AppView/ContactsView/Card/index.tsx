import { CopyButton } from "@/components/CopyButton";
import { linkStyles, wrapperStyles } from "./style.css";

interface CardInterface {
  title: string;
  link: string;
  copy: string;
}

export default function Card({ title, link, copy }: CardInterface) {
  return (
    <div className={wrapperStyles}>
      <a href={link} target="_blank" rel="noreferrer" className={linkStyles}>
        {title}
      </a>
      <CopyButton copyText={copy} size="2x" />
    </div>
  );
}
