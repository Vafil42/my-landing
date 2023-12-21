import { textStyles, wrapperStyles } from "./style.css";

interface TitleInterface {
  title: string;
  id: string;
}

export default function Title({ title, id }: TitleInterface) {
  return (
    <div className={wrapperStyles}>
      <section id={id}>
        <span className={textStyles}>{title}</span>
      </section>
    </div>
  );
}
