import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;