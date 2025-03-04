import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./logo";
import MenuItems from "./menu";
import Button from "../Button";
import SlideMenu from "./SlideMenu";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
            console.log(position);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    return (
        <nav className={`fixed z-20 ${scrollPosition > 0 ? 'h-14' : ''}  w-full bg-white flex flex-row shadow-md`}>
            {/* Logo Section */}
            <Logo
                width={scrollPosition > 0 ? 150 : 200}
                src={scrollPosition > 0 ? "/logo2.png" : "/logo.png"}
                hidebar={scrollPosition > 0}
                position={scrollPosition > 0 ? "ml-10 mb-10" : ""}
            />


            {/* Navigation and Button */}
            <div className={`container mx-auto flex items-center  py-4 px-6 ${scrollPosition > 0 ? 'justify-end mr-14 ' : 'justify-between'}`}>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <MenuItems />
                </div>

                {/* Contact Button hidden md:block */}
                <div className={` ${scrollPosition > 0 ? 'hidden' : 'hidden md:block'}`}>
                    <Button href="" text="GET SOLUTION" py="4" px="8" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 ml-auto pr-4"
                    onClick={() => setMenuOpen(true)}
                >
                    <FaBars />
                </button>

            </div>

            {/* Mobile Menu */}

            <SlideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        </nav>
    );
};

export default Navbar;
