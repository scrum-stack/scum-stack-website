import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const TechManagement = () => {
    return (
        <section className="flex flex-col md:flex-row items-stretch bg-[url('/techBg.jpg')] bg-cover bg-top bg-no-repeat bg-secondary text-white h-auto pb-10 md:h-screen">
            {/* Left Content */}
            <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-12 space-y-4">
                <p className="text-primary font-semibold uppercase border-l-4 border-primary pl-2">
                    Tech Management
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    The Best Source for <br /> IT Solutions
                </h2>
                <p className="text-gray-400">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu convenient scheduling, account fugiat nulla pariatur.
                </p>
                <div className="flex items-start space-x-3 mt-4">
                    <span className="text-primary text-3xl">$</span>
                    <div>
                        <p className="font-bold text-lg">We're doing the right thing.</p>
                        <p className="font-bold text-lg">The right way.</p>
                    </div>
                </div>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-gray-400">
                        <span className="text-primary text-xl mr-2">✔</span>
                        Lorem Ipsum is not simply random text
                    </li>
                    <li className="flex items-center text-gray-400">
                        <span className="text-primary text-xl mr-2">✔</span>
                        Making this the first true generator on the Internet
                    </li>
                    <li className="flex items-center text-gray-400">
                        <span className="text-primary text-xl mr-2">✔</span>
                        Various versions have evolved over the years
                    </li>
                </ul>
            </div>

            {/* Right Content (Yellow Sidebar + Image) */}
            <div className="relative md:w-1/2 flex flex-col md:flex-row h-full md:h-auto">
                {/* Yellow Sidebar with Play Icon */}
                <div className="bg-primary w-full md:w-40 flex flex-col items-center justify-center md:justify-around h-48 md:h-full py-6 md:py-0">
                    {/* Animated Video Button */}
                    <motion.div
                        className="border border-secondary bg-secondary text-white rounded-full p-4 shadow-lg"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: [1.2, 1, 1.2] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <FaPlay className="text-2xl" />
                    </motion.div>
                    <p className="text-secondary text-sm font-bold text-center mt-4 p-2">
                        Professional IT technology services you can trust
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative flex-1 w-full h-64 md:h-full">
                    <Image
                        src="/techImg.jpg"
                        alt="Team Discussion"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default TechManagement;
