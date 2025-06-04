import { Truck, CreditCard, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    title: "Оформление заказа",
    description: "Вы выбираете товар и оформляете заказ через корзину.",
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-blue-600" />,
    title: "Обработка и упаковка",
    description: "Наши сотрудники собирают и тщательно упаковывают ваш заказ.",
  },
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Доставка",
    description: "Курьер доставит заказ в удобное для вас время.",
  },
];

export default function DeliverySteps() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Как происходит доставка
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
