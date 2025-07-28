import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;