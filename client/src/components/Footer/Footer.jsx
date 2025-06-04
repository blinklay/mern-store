import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-12 border-t">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-black">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="hover:text-black">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-black">
                Корзина
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800">О нас</h3>
          <p className="text-sm leading-relaxed">
            Мы — онлайн-магазин музыкальных инструментов, предоставляющий
            широкий выбор гитар и аксессуаров. Работаем по всей России.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Контакты</h3>
          <ul className="space-y-2">
            <li>Email: support@guitarshop.ru</li>
            <li>Телефон: +7 (900) 123-45-67</li>
            <li>
              <Link to="/delivery" className="hover:text-black">
                Доставка и оплата
              </Link>
            </li>
            <li>
              <Link to="/policy" className="hover:text-black">
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-gray-200">
        © {new Date().getFullYear()} GuitarStore. Все права защищены.
      </div>
    </footer>
  );
}
