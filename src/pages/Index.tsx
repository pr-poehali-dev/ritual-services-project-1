import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Cross" size={28} />
            <div>
              <h1 className="text-2xl font-bold">Память</h1>
              <p className="text-sm opacity-90">Центр ритуальных услуг в городе Гагарин</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">☎ 8 (800) 555-0123</p>
            <p className="text-sm opacity-90">Круглосуточно</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Круглосуточная служба экстренного реагирования</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Мы понимаем, как важно в трудные минуты получить профессиональную помощь и поддержку. 
            Наша команда работает 24/7, чтобы помочь вам достойно проводить в последний путь ваших близких.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать службу
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Организация похорон */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Heart" size={32} className="text-primary mb-2" />
                <CardTitle>Организация похорон</CardTitle>
                <CardDescription>Полное сопровождение церемонии прощания</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Оформление документов</li>
                  <li>• Подготовка усопшего</li>
                  <li>• Организация церемонии</li>
                  <li>• Транспортные услуги</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            {/* Памятники */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Mountain" size={32} className="text-primary mb-2" />
                <CardTitle>Памятники</CardTitle>
                <CardDescription>Изготовление и установка памятников</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Гранитные памятники</li>
                  <li>• Мраморные изделия</li>
                  <li>• Индивидуальный дизайн</li>
                  <li>• Гравировка портретов</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">Каталог</Button>
              </CardContent>
            </Card>

            {/* Доставка */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Truck" size={32} className="text-primary mb-2" />
                <CardTitle>Доставка</CardTitle>
                <CardDescription>Транспортные услуги по городу и области</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Катафалк</li>
                  <li>• Автобус для родственников</li>
                  <li>• Доставка венков и цветов</li>
                  <li>• Межгород</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">Заказать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О нас</h2>
              <p className="text-muted-foreground mb-4">
                Более 15 лет мы помогаем семьям в трудные моменты жизни. Наш опыт и профессионализм 
                позволяют организовать церемонию прощания с максимальным уважением к памяти усопшего 
                и с заботой о родственниках.
              </p>
              <p className="text-muted-foreground mb-6">
                Мы работаем круглосуточно, потому что понимаем — скорбь не знает времени. 
                Наша команда всегда готова оказать поддержку и взять на себя все организационные вопросы.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">работаем</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">семей</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/087ea28b-240c-4e62-b418-77be093f0a4f.jpg" 
                alt="Наша команда" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Прайс-лист</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Базовый пакет</CardTitle>
                <CardDescription>Основные услуги по организации похорон</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">от 25 000 ₽</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Оформление документов</li>
                  <li>✓ Гроб</li>
                  <li>✓ Венки и цветы</li>
                  <li>✓ Катафалк</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Стандартный пакет</CardTitle>
                <CardDescription>Расширенный комплекс услуг</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">от 45 000 ₽</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Всё из базового пакета</li>
                  <li>✓ Подготовка усопшего</li>
                  <li>✓ Поминальный обед</li>
                  <li>✓ Автобус для родственников</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>VIP пакет</CardTitle>
                <CardDescription>Полный комплекс премиум услуг</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">от 85 000 ₽</div>
                <ul className="space-y-2 text-sm">
                  <li>✓ Всё из стандартного пакета</li>
                  <li>✓ Элитный гроб</li>
                  <li>✓ Персональный координатор</li>
                  <li>✓ Видеосъёмка церемонии</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Memorial Image Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <img 
            src="/img/36fcdf2d-7c28-4926-aa8a-ae495b2d3959.jpg" 
            alt="Памятник с цветами" 
            className="rounded-lg shadow-lg mx-auto mb-8 max-w-2xl w-full"
          />
          <h2 className="text-3xl font-bold mb-4">Вечная память</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы помогаем сохранить память о ваших близких на долгие годы. 
            Каждый памятник — это не просто камень, это символ любви и уважения к ушедшему человеку.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon name="Phone" size={32} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p>8 (800) 555-0123</p>
              <p className="text-sm opacity-75">Круглосуточно</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={32} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p>ул. Центральная, 15</p>
              <p className="text-sm opacity-75">г. Москва</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={32} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p>info@pamyat.ru</p>
              <p className="text-sm opacity-75">Ответим в течение часа</p>
            </div>
            <div className="text-center">
              <Icon name="Clock" size={32} className="mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <p>24 часа в сутки</p>
              <p className="text-sm opacity-75">7 дней в неделю</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/90 text-primary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Cross" size={24} />
            <h3 className="text-xl font-bold">Память</h3>
          </div>
          <p className="text-sm opacity-75 mb-4">
            Центр ритуальных услуг в городе Гагарин. Заботимся о памяти ваших близких
          </p>
          <Separator className="my-4 bg-primary-foreground/20" />
          <p className="text-xs opacity-60">
            © 2024 Ритуальные услуги "Память". Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;