import Card, { CardInterface } from "./Card";
import { cardsWrapperStyles } from "./style.css";
import View from "@/components/View";

export default function ExpirienceView() {
  const cards: CardInterface[] = [
    {
      title: "junior-job.ru",
      link: "https://junior-job.ru/",
      text: "5 месяцев Backend разработки на фреймворке Nest.js. На проекте использовалась ORM-система Sequelize в сочетании с базой данных PostgreSQL. Backend включал в себя около 10 моделей, систему аутентификации с использование JWT.",
      repositoryLink: "https://github.com/Vafil42/jj-test-back",
    },
    {
      title: "pageflow.ru",
      link: "https://pageflow.ru/",
      text: "3 месяца full-stack разработки. На Backend-е использовался стейт менеджер MobX. Были прописаны слой переиспользуемых компонентов, слой еденично используемых видов (views) и слой страниц (next.js pages). На Backend-е использовалась ORM-система TypeORM. Так-же были прописаны библиотеки с переиспользуемыми функциями и классами.",
    },
  ];

  return (
    <View title="Мой опыт" id="expirience">
      <div className={cardsWrapperStyles}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </View>
  );
}
