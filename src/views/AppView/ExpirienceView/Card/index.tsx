import Icon from "@/components/Icon";
import {
  emptyStyles,
  headerStyles,
  repoStyles,
  textStyles,
  titleStyles,
  wrapperStyles,
} from "./style.css";

export interface CardInterface {
  title: string;
  link: string;
  text: string;
  repositoryLink?: string;
}

export default function Card({
  title,
  link,
  text,
  repositoryLink,
}: CardInterface) {
  return (
    <div className={wrapperStyles}>
      <div className={headerStyles}>
        {repositoryLink ? (
          <a
            href={repositoryLink}
            target="_blank"
            rel="noreferrer"
            className={repoStyles}
          >
            <Icon type="git-branch-line" size="1.5x" />
            Репозиторий
          </a>
        ) : (
          <div className={emptyStyles}></div>
        )}
        <a href={link} target="_blank" rel="noreferrer" className={titleStyles}>
          {title}
        </a>
        <div className={emptyStyles}></div>
      </div>
      <div className={textStyles}>{text}</div>
    </div>
  );
}
