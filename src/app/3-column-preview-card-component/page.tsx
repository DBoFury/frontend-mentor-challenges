import Card from "@/components/3cpcc/Card";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-20 dt:flex-row dt:mx-10 dt:my-0">
      <Card
        image="3-column-preview-card-component/icon-sedans.svg"
        name="sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city on on your next road trip."
        textColor="text-3cpcc-bright-orange"
        className="rounded-t-lg bg-3cpcc-bright-orange dt:rounded-l-lg dt:rounded-tr-none"
      />
      <Card
        image="3-column-preview-card-component/icon-suvs.svg"
        name="suvs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        textColor="text-3cpcc-dark-cyan"
        className="bg-3cpcc-dark-cyan"
      />
      <Card
        image="3-column-preview-card-component/icon-luxury.svg"
        name="luxury"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        textColor="text-3cpcc-very-dark-cyan"
        className="rounded-b-lg bg-3cpcc-very-dark-cyan dt:rounded-r-lg dt:rounded-bl-none"
      />
    </div>
  );
};

export default page;
