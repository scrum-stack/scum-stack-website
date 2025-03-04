'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: 'Jessica Brown',
        position: 'Senior Designer',
        feedback: 'Competitive pricing and customer support. It’s refreshing to get such a personal touch.',
        rating: 5,
        image: '/client1.png',
    },
    {
        name: 'Mark Johnson',
        position: 'Project Manager',
        feedback: 'Great service with excellent support! I highly recommend them for all tech needs.',
        rating: 5,
        image: '/client1.png',
    },
    {
        name: 'Sophia Adams',
        position: 'Marketing Director',
        feedback: 'They provide outstanding results with a very professional approach. Loved the experience!',
        rating: 5,
        image: '/client1.png',
    },
];

const Feedback = () => {
    return (
        <section className="px-6 md:px-20 py-16 bg-gray-50 text-secondary bg-[url('/AboutBg.jpg')] bg-cover bg-right bg-no-repeat">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h4 className="text-primary font-semibold uppercase tracking-widest text-sm md:text-base">
                    Our Feedbacks
                </h4>
                <h2 className="text-3xl md:text-5xl text-secondary font-bold leading-tight">
                    What They’re Talking About Company
                </h2>
            </div>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="overflow-hidden"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            {/* Text Content */}
                            <div className="text-center md:text-left md:w-1/2">
                                <div className="flex justify-center md:justify-start">
                                    <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 8h4V4h-4a4 4 0 0 0-4 4v4h4v8h4V8zM3 12h4v8h4V8H7V4H3z"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-500 text-lg mt-4">{testimonial.feedback}</p>
                                <h3 className="text-xl font-semibold text-secondary mt-4">{testimonial.name}</h3>
                                <p className="text-primary text-sm font-medium">{testimonial.position}</p>
                                {/* Rating Stars */}
                                <div className="flex gap-1 mt-2 justify-center md:justify-start">
                                    {Array.from({ length: testimonial.rating }, (_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 .587l3.668 7.431 8.2 1.178-5.934 5.784 1.4 8.16L12 18.896l-7.334 3.86 1.4-8.16L.132 9.196l8.2-1.178L12 .587z"/>
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image src={testimonial.image} alt={testimonial.name} layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Feedback;
