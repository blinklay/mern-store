export default function Greeting() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src="/images/main-pic.png"
            alt="Гитара"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Добро пожаловать в{" "}
            <span className="text-blue-600">Guitar Store</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Магазин гитар, где каждая струна звучит по-настоящему.
          </p>
          <p className="text-gray-600 mb-4">
            Открой для себя мир электрических, акустических и бас-гитар — от
            классики до современности. Мы подбираем инструменты с душой и
            предлагаем то, что действительно звучит.
          </p>
          <ul className="text-gray-600 space-y-1">
            <li>🛒 Быстрая доставка</li>
            <li>🎵 Только проверенные бренды</li>
            <li>💬 Поддержка музыкантов</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
