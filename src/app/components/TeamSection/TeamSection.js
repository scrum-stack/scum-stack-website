'use client';
import Image from 'next/image';

const teamMembers = [
    { id: 1, name: "KEVIN HARDSON", role: "DESIGNER", img: "/member1.jpg" },
    { id: 2, name: "JESSICA BROWN", role: "DEVELOPER", img: "/member2.jpg" },
    { id: 3, name: "MICHALE SMITH", role: "CO FOUNDER", img: "/member3.jpg" }
];

const TeamSection = () => {
    return (
        <section className="px-6 md:px-20 py-18  bg-[url('/feedbackBg.png')]  bg-left-bottom bg-no-repeat">
            {/* Title */}
            <div className="text-center mb-12">
                <p className="text-gold font-semibold text-primary uppercase">OUR FEEDBACKS</p>
                <h2 className="text-4xl font-bold text-secondary">EXPERTS READY TO SERVE</h2>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.id} className="group overflow-hidden  shadow-lg transition-all duration-300 hover:shadow-xl">
                        {/* Image with Zoom Effect */}
                        <div className="relative w-full h-96 overflow-hidden">
                            <Image
                                src={member.img}
                                alt={member.name}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                            />
                        </div>

                        {/* Name and Role */}
                        <div className="text-center bg-white py-4">
                            <h3 className="text-lg font-bold text-secondary">{member.name}</h3>
                            <p className="text-gray-400 uppercase text-sm">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
