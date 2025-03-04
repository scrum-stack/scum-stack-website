import Image from "next/image";
import Button from "../Button";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src="/heroBg.jpg" // Change this to your actual image path
                    alt="IT Solutions"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <div className="relative inline-block">
                    {/* Decorative Circle */}
                    <div className="absolute right-1/2 translate-x-1/2 md:right-40 md:translate-x-0 -top-10 md:-top-20 w-28 h-10 md:w-56 md:h-16 animate-bounce-up-down">
                        <Image src="/logo2.png" alt="Logo" width={200} height={200} />
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                        IT Solutions & Services <br /> at your Fingertips
                    </h1>

                    {/* Button */}
                    <div className="mt-6 flex justify-center items-center">
                        <Button href="" text="DISCOVER MORE" px="8" py="3" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
