import Photo from "@/components/Photo";
import {
  headerStyles,
  linksWrapperStyles,
  logoStyles,
  wrapperStyles,
} from "./style.css";
import AnchorLink from "@/components/AnchorLink";

export default function Header() {
  const links = [
    {
      text: "Стэк",
      href: "stack",
    },
    {
      text: "Опыт",
      href: "expirience",
    },
    {
      text: "Контакты",
      href: "contacts",
    },
  ];

  return (
    <header className={headerStyles}>
      <div className={wrapperStyles}>
        <AnchorLink href="main">
          <Photo src="/logo.svg" imgClassName={logoStyles} />
        </AnchorLink>
        <div className={linksWrapperStyles}>
          {links.map((item, index) => (
            <AnchorLink key={index} href={item.href}>
              {item.text}
            </AnchorLink>
          ))}
        </div>
      </div>
    </header>
  );
}
