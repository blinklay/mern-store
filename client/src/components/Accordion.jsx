import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "Как подобрать размер?",
    answer:
      "На странице каждого товара есть таблица размеров с замерами в сантиметрах. Советуем сравнить их со своей одеждой, чтобы выбрать оптимально подходящий размер. Если сомневаетесь — напишите нам, мы поможем.",
  },
  {
    id: 2,
    question: "Как ухаживать за изделиями?",
    answer:
      "Рекомендуем стирать вещи при температуре не выше 30 °C на деликатном режиме, не использовать агрессивные отбеливатели и сушить естественным способом. Подробные рекомендации указаны на ярлыке каждого изделия.",
  },
  {
    id: 3,
    question: "Какие способы доставки доступны?",
    answer:
      "Мы отправляем заказы по всей России и в страны СНГ. Доступны курьерская доставка и пункты самовывоза. Стоимость и сроки рассчитываются при оформлении заказа в корзине.",
  },
  {
    id: 4,
    question: "Можно ли вернуть или обменять товар?",
    answer:
      "Да, вы можете вернуть или обменять товар в течение 14 дней с момента получения, если сохранён товарный вид и ярлыки. Подробная инструкция по возврату есть в разделе «Возврат и обмен».",
  },
  {
    id: 5,
    question: "Когда я получу свой заказ?",
    answer:
      "Срок доставки зависит от региона и выбранного способа доставки. В среднем по России доставка занимает 3–7 рабочих дней.",
  },
  {
    id: 6,
    question: "Что делать, если товар оказался бракованным?",
    answer:
      "Если вы обнаружили брак, свяжитесь с нашей службой поддержки в течение 48 часов после получения заказа, приложив фото. Мы предложим замену товара или вернём деньги.",
  },
  {
    id: 7,
    question: "Какие способы оплаты вы принимаете?",
    answer:
      "Мы принимаем оплату картами Visa, MasterCard, МИР, а также через Apple Pay и Google Pay. Для некоторых регионов доступна оплата при получении.",
  },
];

export default function Accordion() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-3">
      {faqItems.map((item) => (
        <div key={item.id} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(item.id)}
            className="w-full flex justify-between items-center p-3 bg-gray-100 font-semibold text-left"
            aria-expanded={activeId === item.id}
          >
            {item.question}
            <span
              className={`transition-transform ${
                activeId === item.id ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeId === item.id ? "max-h-40 p-3" : "max-h-0 p-0"
            }`}
          >
            <p className="text-gray-700">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
