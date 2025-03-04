import Card from "./Card";

const servicesData = [
  {
    image: "/service1.jpg",
    title: "Product Development",
    description: "We've designed a culture that allows our stewards to assimilate."
  },
  {
    image: "/service2.jpg",
    title: "UI/UX Designing",
    description: "We've designed a culture that allows our stewards to assimilate."
  },
  {
    image: "/service3.jpg",
    title: "Digital Marketing",
    description: "We've designed a culture that allows our stewards to assimilate."
  }
];

const Services = () => {
  return (
    <section className="py-12 flex flex-col items-center w-full">
      <div className="text-center w-full">
        <p className="text-primary font-semibold uppercase">Services We're Offering</p>
        <h2 className="lg:text-4xl  text-secondary font-bold mt-2 w-4/6 mx-auto md:text-2xl sm:text-xl">
          High quality products and services that we stand behind
        </h2>
      </div>
      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;