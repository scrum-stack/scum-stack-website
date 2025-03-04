import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const Button = (props) => {
    const {href,text,py,px,isArrow}=props
    return (
        <Link href={href}>
            <button className={`relative overflow-hidden text-xs bg-primary text-secondary font-semibold  px-${px} py-${py} flex items-center gap-2 
                before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                before:bg-gradient-to-b before:from-secondary before:to-secondary  
                before:transition-transform before:duration-300 before:scale-y-0
                hover:before:scale-y-100 hover:text-white before:z-0`}>
                <span className="relative z-10">{text}</span>
                <FaArrowRight className={`relative z-10 ${isArrow} `} />
            </button>
        </Link>
    );
};

export default Button;
