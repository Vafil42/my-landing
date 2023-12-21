import Title from "./Title";
import { wrapperStyles } from "./style.css";

interface ViewInterface {
  children: React.ReactNode;
  title: string;
  id: string;
}

export default function View({ children, title, id }: ViewInterface) {
  return (
    <div className={wrapperStyles}>
      <Title title={title} id={id} />
      {children}
    </div>
  );
}
