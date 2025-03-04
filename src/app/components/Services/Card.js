import Image from "next/image";
import { FaCogs, FaPalette, FaChartLine } from "react-icons/fa";

const iconMap = {
  "Product Development": <FaCogs size={30} className="text-white" />, 
  "UI/UX Designing": <FaPalette size={30} className="text-white" />, 
  "Digital Marketing": <FaChartLine size={30} className="text-white" />
};

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg p-4 border border-gray-200  w-80">
      <div className="relative w-full h-56 overflow-hidden ">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="relative -mt-5 ml-4 bg-primary p-3 rounded-full shadow-lg flex items-center justify-center w-12 h-12">
        {iconMap[title]}
      </div>
      <h3 className="text-lg text-secondary font-bold mt-4 text-center">{title}</h3>
      <p className="text-gray-400 text-sm mt-2 text-center">{description}</p>
      <div className="text-center mt-4">
        <a href="#" className=" text-sm font-semibold text-gray-400 hover:text-primary ">READ MORE →</a>
      </div>
    </div>
  );
};

export default Card;
