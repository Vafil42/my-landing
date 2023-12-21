import Photo from "@/components/Photo";
import {
  headerStyles,
  linkStyles,
  linksWrapperStyles,
  logoStyles,
  wrapperStyles,
} from "./style.css";

export default function Header() {
  const links = [
    {
      text: "Стэк",
      href: "#stack",
    },
    {
      text: "Опыт",
      href: "#expirience",
    },
    {
      text: "Контакты",
      href: "#contacts",
    },
  ];

  return (
    <header className={headerStyles}>
      <div className={wrapperStyles}>
        <Photo src="/logo.svg" imgClassName={logoStyles} />
        <div className={linksWrapperStyles}>
          {links.map((item, index) => (
            <a key={index} href={item.href} className={linkStyles}>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
