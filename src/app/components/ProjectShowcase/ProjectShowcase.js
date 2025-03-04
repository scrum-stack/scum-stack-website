'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
    { title: 'Web Development', category: 'DESIGN / IDEAS', img: '/web-dev.jpg' },
    { title: 'Tech Solutions', category: 'DESIGN / IDEAS', img: '/tech-solutions.jpg' },
    { title: 'Smart Visions', category: 'DESIGN / IDEAS', img: '/smart-visions.jpg' },
    { title: 'Platform Integration', category: 'DESIGN / IDEAS', img: '/platform-integration.jpg' },
    { title: 'Tech Solutions', category: 'DESIGN / IDEAS', img: '/tech-solutions.jpg' },
];

const ProjectShowcase = () => {
    return (
        <section className="px-6 md:px-20 py-16 bg-gray-50 text-secondary">
            {/* Heading Section */}
            <div className="text-center flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 mb-10">
                <div className="md:w-1/2">
                    <h4 className="text-primary font-semibold uppercase tracking-widest text-sm md:text-base">
                        Recently Completed Work
                    </h4>
                    <h2 className="text-3xl text-secondary md:text-5xl font-bold leading-tight">
                        Improve & Enhance the Tech Projects
                    </h2>
                </div>
                <p className="text-gray-400 md:w-1/2 text-base md:text-lg leading-relaxed">
                    There are many variations of passages available, but most have suffered alteration in some form, by humor or randomized words.
                </p>
            </div>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    320: { slidesPerView: 1 },   // Small phones
                    480: { slidesPerView: 1.3 }, // Larger phones
                    640: { slidesPerView: 1.5 }, // Tablets
                    768: { slidesPerView: 2 },   // Small desktops
                    1024: { slidesPerView: 3 },  // Larger screens
                    1280: { slidesPerView: 4 }   // Extra-large screens
                }}
                className="overflow-hidden"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-72 md:h-96 overflow-hidden shadow-lg cursor-pointer">
                            <Image src={project.img} alt={project.title} layout="fill" objectFit="cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-primary hover:bg-opacity-50 transition-all duration-500 flex flex-col justify-end p-5">
                                <h3 className="text-white font-bold text-lg md:text-xl">{project.title}</h3>
                                <p className="text-primary text-sm font-semibold">{project.category}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ProjectShowcase;
