import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Subscribed email:", email);
    setSubmitted(true);
  };

  return (
    <section className=" py-10 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Подпишитесь на рассылку
        </h2>
        <p className="text-gray-600 mb-6">
          Получайте новости о скидках и новых поступлениях первым!
        </p>

        {submitted ? (
          <p className="text-green-600 font-semibold">Спасибо за подписку!</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              required
              placeholder="Введите ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Подписаться
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
