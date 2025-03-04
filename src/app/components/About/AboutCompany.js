import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BsGlobe } from "react-icons/bs";
import Button from "../Button";

const AboutCompany = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Heading Section */}
        <h5 className="text-primary uppercase text-xs font-bold tracking-wider mb-2 flex items-center">
          About Our Company
          <span className="w-16 h-1 bg-primary ml-2"></span>
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight mb-4">
          We Execute Our Ideas <br className="hidden sm:block" /> From The Start to Finish
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-8">
          Web designing in a powerful way is not only a profession but also a passion for our company. 
          We believe that a smart-looking website makes a great first impression on visitors.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Services Section */}
          <div className="space-y-6 flex-1">
            <div className="flex items-start gap-4">
              <HiOutlineRocketLaunch className="text-primary text-6xl sm:text-5xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-secondary">Manage Tech Services</h4>
                <p className="text-gray-400 text-sm">We’ve designed a culture that allows our stewards to assimilate.</p>
              </div>
            </div>

            <div className="border-t border-gray-300 w-full" />

            <div className="flex items-start gap-4">
              <BsGlobe className="text-primary text-6xl sm:text-5xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-secondary">Internal Networking</h4>
                <p className="text-gray-400 text-sm">We’ve designed a culture that allows our stewards to assimilate.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex md:block justify-center">
            <div className="border-t-4 p-4 sm:p-6 w-64 border-primary h-40 bg-[#F4F5F8] hover:bg-white text-center">
              <h5 className="text-base font-semibold text-gray-900 pt-4">
                High Quality IT <br /> Solutions for Startups
              </h5>
              <a href="#" className="text-primary font-semibold text-sm inline-flex items-center mt-2">
                More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <Button href="" text="DISCOVER MORE" px="8" py="3" />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
