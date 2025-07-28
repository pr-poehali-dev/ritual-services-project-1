import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;