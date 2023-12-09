import {
  titleStyles,
  wrapperStyles,
  listWrapperStyles,
  listElementStyles,
} from "./style.css";

interface CardInterface {
  title: string;
  list: string[];
}

export default function Card({ title, list }: CardInterface) {
  return (
    <div className={wrapperStyles}>
      <div className={titleStyles}>{title}</div>
      <ul className={listWrapperStyles}>
        {list.map((item, index) => (
          <li key={index} className={listElementStyles}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
