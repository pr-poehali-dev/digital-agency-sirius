import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">СИРИУС</h1>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-black transition-colors"
            >
              О нас
            </a>
            <a
              href="#contacts"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Диджитал агентство
            <br />
            полного цикла
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Мы создаем цифровые решения, которые работают. От стратегии до
            реализации — все под одной крышей.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="space-y-4">
              <img
                src="/img/69efb323-8ead-4e14-99f6-484b726ea8af.jpg"
                alt="Современный офис агентства"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Профессиональный подход
                </h3>
                <p className="text-gray-600">
                  Каждый проект — это уникальное решение, созданное специально
                  для ваших целей
                </p>
              </div>
              <Button className="w-fit bg-black text-white hover:bg-gray-800">
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр цифрового маркетинга для роста вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Share2"
                  size={48}
                  className="mx-auto mb-4 text-black"
                />
                <CardTitle className="text-xl font-bold text-black">
                  SMM
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Продвижение в социальных сетях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Контент-стратегия</li>
                  <li>• Ведение аккаунтов</li>
                  <li>• Создание контента</li>
                  <li>• Анализ эффективности</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Target"
                  size={48}
                  className="mx-auto mb-4 text-black"
                />
                <CardTitle className="text-xl font-bold text-black">
                  Контекстная реклама
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Настройка и ведение рекламных кампаний
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Google Ads</li>
                  <li>• Яндекс.Директ</li>
                  <li>• Оптимизация ставок</li>
                  <li>• A/B тестирование</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-black"
                />
                <CardTitle className="text-xl font-bold text-black">
                  Управление соцсетями
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Комплексное ведение социальных медиа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Комьюнити-менеджмент</li>
                  <li>• Модерация комментариев</li>
                  <li>• Работа с отзывами</li>
                  <li>• Кризис-менеджмент</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Palette"
                  size={48}
                  className="mx-auto mb-4 text-black"
                />
                <CardTitle className="text-xl font-bold text-black">
                  Веб-дизайн
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Создание современных интерфейсов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• UX/UI дизайн</li>
                  <li>• Адаптивная верстка</li>
                  <li>• Прототипирование</li>
                  <li>• Пользовательские тесты</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Sparkles"
                  size={48}
                  className="mx-auto mb-4 text-black"
                />
                <CardTitle className="text-xl font-bold text-black">
                  Брендинг
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Разработка фирменного стиля
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Логотип и фирменный стиль</li>
                  <li>• Гайдлайны бренда</li>
                  <li>• Позиционирование</li>
                  <li>• Ребрендинг</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="BarChart3"
                  size={48}
                  className="mx-auto mb-4 text-black"
                />
                <CardTitle className="text-xl font-bold text-black">
                  Аналитика
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Анализ эффективности и отчетность
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Google Analytics</li>
                  <li>• Яндекс.Метрика</li>
                  <li>• Сквозная аналитика</li>
                  <li>• Регулярные отчеты</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-black mb-8">О нас</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Мы — команда профессионалов с многолетним опытом в цифровом
            маркетинге. Наша миссия — помочь бизнесу расти в цифровой среде
            через эффективные и измеримые решения.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">50+</div>
              <p className="text-gray-600">Успешных проектов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">5</div>
              <p className="text-gray-600">Лет на рынке</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">15</div>
              <p className="text-gray-600">Экспертов в команде</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Контакты</h2>
          <p className="text-xl text-gray-600 mb-12">
            Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <Icon
                  name="Phone"
                  size={32}
                  className="mx-auto mb-4 text-black"
                />
                <h3 className="text-lg font-bold text-black mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (xxx) xxx-xx-xx</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <Icon
                  name="Mail"
                  size={32}
                  className="mx-auto mb-4 text-black"
                />
                <h3 className="text-lg font-bold text-black mb-2">Email</h3>
                <p className="text-gray-600">hello@sirius.agency</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-black mb-4">СИРИУС</h3>
          <p className="text-gray-600 mb-6">Диджитал агентство полного цикла</p>
          <p className="text-sm text-gray-500">
            © 2024 Сириус. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
