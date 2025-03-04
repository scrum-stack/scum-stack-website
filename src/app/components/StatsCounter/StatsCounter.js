'use client';
import Button from '../Button';
import { FaChartBar, FaUserTie, FaUsers, FaCogs } from 'react-icons/fa';

const stats = [
    { id: 1, value: '4,520', label: 'PROJECT COMPLETED', icon: <FaChartBar className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[50px] lg:h-[50px]' />, bg: 'bg-[#E6E8ED]', text: 'text-secondary',btnText:"PROJECT COMPLETED" },
    { id: 2, value: '326', label: 'IT SPECIALISTS', icon: <FaUserTie className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[50px] lg:h-[50px]' />, bg: 'bg-[#E6E8ED]', text: 'text-secondary',btnText:"IT SPECILALISTS" },
    { id: 3, value: '8,600', label: 'SATISFIED CLIENTS', icon: <FaUsers className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[50px] lg:h-[50px]' />, bg: 'bg-[#E6E8ED]', text: 'text-secondary',btnText:"SATISFIED CLIENT" },
    { id: 4, value: '238', label: 'SMART SOLUTIONS', icon: <FaCogs className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] lg:w-[50px] lg:h-[50px]' />, bg: 'bg-[#E6E8ED]', text: 'text-secondary', btnText:"SMART SOLUTION" }
];

const StatsCounter = () => {
    return (
        <section className="px-6 md:px-20 py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.id} className="group bg-[url('/stats-counterBg.png')] bg-cover bg-right bg-no-repeat bg-white p-8  shadow-lg text-center transition-all duration-300 hover:shadow-xl">
                        {/* Icon Box */}
                        <div className={`w-28 h-28 -mt-14 mx-auto flex items-center justify-center ${stat.bg} ${stat.text} transition-all duration-300 group-hover:bg-secondary group-hover:text-primary group-hover:rounded-full`}>
                            {stat.icon}
                        </div>
                        {/* Counter Value */}
                        <h3 className="text-4xl font-bold mb-2 text-secondary mt-4">{stat.value}</h3>
                       
                        <div className='flex flex-row justify-center items-center'>
                        <Button  href="" text={stat.label} px="8" py="3" isArrow="hidden" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsCounter;
