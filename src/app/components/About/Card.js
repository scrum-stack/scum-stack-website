import { PiCodeSimpleThin } from "react-icons/pi";

const Card = ({ icon, heading, text }) => {
  return (
    <div
      className="relative bg-white shadow-lg p-6  flex flex-col items-center 
      transition-all duration-300 ease-in-out hover:text-white group w-full md:w-[350px] h-auto"
    >
      {/* Hover Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center 
        before:absolute before:top-0 before:left-0 before:w-full before:h-full 
        before:bg-[url('/cardBg.jpg')] before:bg-cover before:bg-center 
        before:transition-transform before:duration-300 before:scale-y-0 
        group-hover:before:scale-y-100 before:z-0"
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon + Heading */}
        <div className="flex flex-row items-center  p-3 rounded-md mb-4 gap-4 transition-all duration-300 ease-in-out">
          <div className="bg-primary p-3 rounded-md transition-all duration-300 ease-in-out">
            <PiCodeSimpleThin size={40} className="text-black" />
          </div>
          <h1 className="text-lg text-[#222429] font-semibold transition-all duration-300 ease-in-out group-hover:text-white">
            {heading}
          </h1>
        </div>

        {/* Text */}
        <p className="text-gray-600 font-light text-base transition-all duration-300 ease-in-out group-hover:text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
