import AboutCompany from "./AboutCompany";
import Card from "./Card";
import ClientSatisfaction from "./ClientSatisfaction";
import ImageGrid from "./ImageGrid";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 bg-[url('/AboutBg.jpg')] bg-cover bg-right bg-no-repeat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center -mt-20">
          <Card
            icon="/icon1.png"
            heading="Perfect Business Solutions"
            text="When an unknown printer took a galley type book."
          />
          <Card
            icon="/icon2.png"
            heading="Innovative Technology"
            text="We bring cutting-edge solutions to your business."
          />
          <Card
            icon="/icon3.png"
            heading="Reliable Support"
            text="Our team is here to help you succeed at every step."
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-x-8 px-4 sm:px-6 lg:px-8">
        {/* Left Section: Image Grid */}
        <div className="w-full sm:w-3/4 md:w-1/2 flex justify-center">
          <ImageGrid />
        </div>

        {/* Right Section: About Company */}
        <div className="w-full sm:w-3/4 md:w-1/2">
          <AboutCompany />
        </div>
      </div>
    </section>
  );
};

export default About;
