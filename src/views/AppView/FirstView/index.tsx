import Photo from "@/components/Photo";
import {
  photoStyles,
  photoWrapperStyles,
  subtitleStyles,
  textWrapperStyles,
  titleStyles,
  wrapperStyles,
} from "./style.css";

interface FirstViewInterface {}

export default function FirstView({}: FirstViewInterface) {
  return (
    <div className={wrapperStyles}>
      <div className={textWrapperStyles}>
        <div className={titleStyles}>Козенов Даниил</div>
        <div className={subtitleStyles}>
          FullStack разработчик, а не просто какой-то хуй с горы. Я люблю
          чистить ебла и писать сайты. лучше бы вам не встречаться со мой лично.
        </div>
      </div>
      <Photo
        src="/static/photo.png"
        imgClassName={photoStyles}
        className={photoWrapperStyles}
      />
    </div>
  );
}
