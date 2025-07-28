import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const EmergencyInstructionsSection = () => {
  return (
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
  );
};

export default EmergencyInstructionsSection;