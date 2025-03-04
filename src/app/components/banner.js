import Button from "./Button";

const Banner = () => {
  return (
    <section className="relative bg-gray-100 py-32 
      bg-[url('/bgImage.jpg')] bg-cover bg-right bg-no-repeat">
      
      <div className="container mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between px-6">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left p-6 rounded-md">
          
          <p className="flex items-center justify-center lg:justify-start text-white text-sm font-semibold bg-white 
            w-full sm:w-4/6 bg-opacity-10 py-2 mb-2">
            <span className="block w-10 h-[2px] bg-primary mr-3"></span>
            SOLUTION FOR YOUR BUSINESS
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-7 leading-tight">
            IT Solutions <br/> <span className="text-primary">&</span> Technology
          </h1>
          
          <p className="text-[#ACADB0] font-medium mb-6 text-sm sm:text-base">
            We provide top-quality IT solutions to help your business grow. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="flex  justify-center lg:justify-start">
          <Button href="" text="DISCOVER MORE" px="8" py="3" />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Banner;
