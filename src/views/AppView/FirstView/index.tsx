import Photo from "@/components/Photo";
import {
  photoStyles,
  photoWrapperStyles,
  subtitleStyles,
  textWrapperStyles,
  titleStyles,
  wrapperStyles,
} from "./style.css";

interface FirstViewInterface { }

export default function FirstView({ }: FirstViewInterface) {
  return (
    <div className={wrapperStyles} id="main">
      <div className={textWrapperStyles}>
        <span className={titleStyles}>Козенов Даниил</span>
        <span className={subtitleStyles}>
          Приветствую! Меня зовут Даниил, я Junior Fullstack разработчик с годом
          опыта. Я специализируюсь на современных JavaScript фреймворках, таких
          как Nest и Next. Ниже вы можете ознакомиться с моими проектами и
          навыками.
        </span>
      </div>
      <Photo
        src="/static/photo.png"
        imgClassName={photoStyles}
        className={photoWrapperStyles}
      />
    </div>
  );
}
