import { CopyButton } from "@/components/CopyButton";
import View from "@/components/View";
import Card from "./Card";
import { rowStyles, wrapperStyles } from "./style.css";

export default function ContactsView() {
  const links = [
    [
      {
        text: "Телефон: +7(915)653-38-02",
        copy: "+79156533802",
      },
      {
        text: "Email: vafil6241@gmail.com",
        copy: "vafil6241@gmail.com",
      },
    ],
    [
      {
        text: "Telegram",
        copy: "https://t.me/dpunk69",
      },
      {
        text: "GitHub",
        copy: "https://github.com/Vafil42",
      },
      {
        text: "Efset",
        copy: "https://efset.ru",
      },
      {
        text: "LeetCode",
        copy: "https://leetcode.com/Vafil42/",
      },
    ],
  ];
  return (
    <View title="Контакты и ссылки" id="contacts">
      <div className={wrapperStyles}>
        {links.map((row, index) => (
          <div key={index} className={rowStyles}>
            {row.map((link, index) => (
              <Card
                key={index}
                title={link.text}
                copy={link.copy}
                link={link.copy}
              />
            ))}
          </div>
        ))}
      </div>
    </View>
  );
}
