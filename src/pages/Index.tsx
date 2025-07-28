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

      {/* Emergency Instructions Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Что делать если человек умер</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              В трудную минуту важно знать правильный порядок действий. 
              Мы поможем вам пройти через все необходимые этапы.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Immediate Actions */}
            <div>
              <Card className="mb-6">
                <CardHeader className="bg-destructive/10">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertTriangle" size={24} className="text-destructive" />
                    <CardTitle className="text-destructive">Экстренные действия</CardTitle>
                  </div>
                  <CardDescription>Первые шаги при наступлении смерти</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-semibold">Вызвать скорую помощь</h4>
                        <p className="text-sm text-muted-foreground">Тел: 103 или 112 для констатации смерти</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-semibold">Не трогать тело</h4>
                        <p className="text-sm text-muted-foreground">До приезда врача не перемещать усопшего</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-semibold">Подготовить документы</h4>
                        <p className="text-sm text-muted-foreground">Паспорт, медицинские документы</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-primary/10">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <CardTitle className="text-primary">Позвонить нам</CardTitle>
                  </div>
                  <CardDescription>Мы возьмем все заботы на себя</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">8 (800) 555-0123</div>
                    <p className="text-muted-foreground mb-4">Круглосуточная служба</p>
                    <Button size="lg" className="w-full">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Вызвать службу прямо сейчас
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Detailed Steps */}
            <div>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name="FileText" size={24} className="text-primary" />
                    <CardTitle>Пошаговый план действий</CardTitle>
                  </div>
                  <CardDescription>Подробная инструкция на первые дни</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Первые часы</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Вызвать врача скорой помощи</li>
                        <li>• Получить справку о смерти</li>
                        <li>• Связаться с ритуальной службой</li>
                        <li>• Уведомить близких родственников</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-muted pl-4">
                      <h4 className="font-semibold mb-2">Первый день</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Получить медицинское свидетельство</li>
                        <li>• Подать заявление в ЗАГС</li>
                        <li>• Выбрать место и время похорон</li>
                        <li>• Заказать ритуальные услуги</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-muted pl-4">
                      <h4 className="font-semibold mb-2">Подготовка к похоронам</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Организация церемонии прощания</li>
                        <li>• Заказ транспорта и венков</li>
                        <li>• Приглашение священника (при желании)</li>
                        <li>• Организация поминального обеда</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-center">
                        <strong>Помните:</strong> Наша служба берет на себя все организационные вопросы. 
                        Вам не нужно разбираться в бюрократических процедурах самостоятельно.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Important Documents Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Необходимые документы</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Icon name="User" size={32} className="mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Документы усопшего</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Паспорт</li>
                    <li>• СНИЛС</li>
                    <li>• Медицинский полис</li>
                    <li>• Военный билет</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Icon name="FileText" size={32} className="mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Медицинские документы</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Справка о смерти</li>
                    <li>• Медицинская карта</li>
                    <li>• Результаты анализов</li>
                    <li>• История болезни</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Icon name="Users" size={32} className="mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Документы родственников</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Паспорт заявителя</li>
                    <li>• Документы родства</li>
                    <li>• Доверенность (если нужна)</li>
                    <li>• Банковские реквизиты</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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

      {/* Monument Gallery Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Галерея памятников</h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Мы изготавливаем памятники из различных материалов и в разных стилях. 
            Каждый памятник — это символ любви и уважения к ушедшему человеку.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="default" size="sm">Все типы</Button>
            <Button variant="outline" size="sm">Гранит</Button>
            <Button variant="outline" size="sm">Мрамор</Button>
            <Button variant="outline" size="sm">Кресты</Button>
            <Button variant="outline" size="sm">Современные</Button>
            <Button variant="outline" size="sm">Семейные</Button>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/53f30401-1b87-4bb7-9584-9d0c42ce434a.jpg" 
                  alt="Гранитный памятник с крестом" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Классический гранитный</h3>
                <p className="text-sm text-muted-foreground mb-3">Темно-серый гранит с гравировкой креста и цветочным орнаментом</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">от 35 000 ₽</span>
                  <Button size="sm" variant="outline">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/c95bdcd1-4c80-469a-b36e-8857f7c3acba.jpg" 
                  alt="Мраморный памятник с ангелом" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Мраморный с ангелом</h3>
                <p className="text-sm text-muted-foreground mb-3">Белый мрамор со скульптурой ангела, классический дизайн</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">от 85 000 ₽</span>
                  <Button size="sm" variant="outline">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/21e2ba30-e925-45a4-b677-a6d24a17926c.jpg" 
                  alt="Черный гранит с золотой надписью" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Премиум черный гранит</h3>
                <p className="text-sm text-muted-foreground mb-3">Полированный черный гранит с золотой гравировкой</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">от 65 000 ₽</span>
                  <Button size="sm" variant="outline">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/9f57d6ab-744f-4c43-9a39-c844f3c4bdd1.jpg" 
                  alt="Двойной семейный памятник" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Семейный двойной</h3>
                <p className="text-sm text-muted-foreground mb-3">Серый гранит для двоих с резьбой в виде сердца</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">от 95 000 ₽</span>
                  <Button size="sm" variant="outline">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/f046f9ec-ceed-4a32-a00b-2cc3e6bd98de.jpg" 
                  alt="Каменный крест кельтский" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Каменный крест</h3>
                <p className="text-sm text-muted-foreground mb-3">Традиционный крест из натурального камня</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">от 45 000 ₽</span>
                  <Button size="sm" variant="outline">Подробнее</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/9ce178d4-d59d-4de9-93f1-6b25418fe6d8.jpg" 
                  alt="Современный минималистичный памятник" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Современный стиль</h3>
                <p className="text-sm text-muted-foreground mb-3">Минималистичный дизайн из полированного гранита</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">от 55 000 ₽</span>
                  <Button size="sm" variant="outline">Подробнее</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Не нашли подходящий вариант? Мы изготовим памятник по вашему индивидуальному заказу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать консультацию
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
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