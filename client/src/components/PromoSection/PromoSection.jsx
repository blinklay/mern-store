const promotions = [
  {
    id: 1,
    title: "Скидка 20% на первые заказы",
    description: "Оформи первый заказ и получи скидку 20% прямо сейчас!",
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    id: 2,
    title: "Бесплатная доставка от 3000 ₽",
    description: "Закажи на сумму от 3000 ₽ и получи бесплатную доставку.",
    image: "https://picsum.photos/id/1025/600/400",
  },
  {
    id: 3,
    title: "Распродажа гитарных аксессуаров",
    description: "Скидки до 40% на струны, чехлы и тюнеры.",
    image: "https://picsum.photos/id/1003/600/400",
  },
];

export default function PromoSection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Акции и предложения
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
              <p className="text-gray-600">{promo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
