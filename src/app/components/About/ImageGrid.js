import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="relative w-full grid grid-cols-2 gap-2 sm:gap-4 lg:left-20">
      {/* Left Image */}
      <div className="relative w-full sm:w-72 md:w-96 lg:w-[400px] -left-5 sm:-left-10 lg:-left-14">
        <Image
          src="/teamImg1.jpg"
          alt="Team Working"
          width={600}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Image - Overlaps the first image on larger screens */}
      <div className="relative left-5 sm:left-10 md:left-14 lg:-ml-28 top-12 sm:top-24 md:top-36 w-40 sm:w-56 md:w-64">
        <Image
          src="/teamImg2.jpg"
          alt="Collaboration"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Orange Vertical Bar
      <div className="absolute top-0 sm:-right-10 w-2 sm:w-3 md:w-4 h-12 sm:h-16 md:h-20  bg-primary"></div> */}

      {/* Overlapping Client Satisfaction Badge */}
      <div
        className="absolute w-44 sm:w-48 md:w-56 bottom-2 sm:bottom-4 left-16 sm:left-24 md:left-32 bg-white 
                    shadow-lg p-2 flex items-center animate-bounce-up-down"
      >
        <Image
          src="/clientImg.jpg"
          alt="Client Icon"
          width={60}
          height={40}
          className="p-2 mr-2 w-14 sm:w-16"
        />
        <div>
          <p className="text-primary font-bold text-xl sm:text-2xl">3600+</p>
          <p className="text-secondary text-xs sm:text-sm">Satisfied Client</p>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
