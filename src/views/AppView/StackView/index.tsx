import View from "@/components/View";
import Card from "./Card";

import { cardsWrapperStyles } from "./style.css";

export default function StackView() {
  const cards = [
    {
      title: "React",
      list: ["Фреймворк Next.js", "Стейтменеджер Mobx", "Flexbox вёрстка"],
    },
    {
      title: "Nest.js",
      list: ["ORM-системы TypeORM и Sequelize", "Mongodb и PostgreSQL"],
    },
    {
      title: "DevOps",
      list: [
        "Работа с GitHub и GitLab",
        "Создание и развёртывание Docker контейнеров",
        "Работа с Linux",
      ],
    },
  ];

  return (
    <View title="Мой стэк" id="stack">
      <div className={cardsWrapperStyles}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} list={card.list} />
        ))}
      </div>
    </View>
  );
}
