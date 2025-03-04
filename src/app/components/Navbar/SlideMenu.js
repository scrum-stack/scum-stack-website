import { useState } from "react";
import { FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

const SlideMenu = ({ isOpen, onClose }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Pages", subItems: ["About", "Team", "FAQ"] },
        { label: "Services", subItems: ["Web Development", "SEO", "Marketing"] },
        { label: "Shop", subItems: ["Products", "Cart", "Checkout"] },
        { label: "News", subItems: ["Blog", "Updates"] },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <div
            className={`fixed top-0 z-10 right-0 h-full w-80 bg-secondary text-white shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-white text-xl" onClick={onClose}>
                <FaTimes />
            </button>

            {/* Logo */}
            <div className="p-6 text-lg font-bold">Oitech</div>

            {/* Menu Items */}
            <ul className="space-y-4 px-6">
                {menuItems.map((item, index) => (
                    <li key={index} className="border-b border-gray-700">
                        {item.subItems ? (
                            <button
                                className="w-full flex justify-between items-center py-3 text-left text-white"
                                onClick={() => toggleDropdown(index)}
                            >
                                {item.label}
                                <FiChevronDown className={`transition-transform ${openDropdown === index ? "rotate-180" : ""}`} />
                            </button>
                        ) : (
                            <Link href={item.href} className="block py-3">
                                {item.label}
                            </Link>
                        )}

                        {/* Dropdown Items */}
                        {item.subItems && openDropdown === index && (
                            <ul className="ml-4 space-y-2 text-sm text-gray-400">
                                {item.subItems.map((sub, subIndex) => (
                                    <li key={subIndex}>
                                        <Link href={`/${sub.toLowerCase()}`} className="block py-2">
                                            {sub}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Contact Section */}
            <div className="p-6 border-t border-gray-700 mt-6">
                <p className="text-primary font-semibold">CALL NOW</p>
                <p className="flex items-center gap-2 text-sm text-gray-300 mt-2">
                    <FaPhoneAlt /> +92 (5820) - 98670
                </p>

                <p className="text-primary font-semibold mt-4">SEND EMAIL</p>
                <p className="flex items-center gap-2 text-sm text-gray-300 mt-2">
                    <FaEnvelope /> help@company.com
                </p>

                <p className="text-primary font-semibold mt-4">WORKING HOURS</p>
                <p className="text-sm text-gray-300 mt-2">Mon - Sat 8:00 - 6:30</p>
                <p className="text-sm text-gray-300">Sunday - CLOSED</p>
            </div>
        </div>
    );
};

export default SlideMenu;
