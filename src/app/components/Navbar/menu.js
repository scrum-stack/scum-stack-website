import Link from "next/link";

const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const MenuItems = () => {
    return (
        <div className="hidden md:flex space-x-8">
        {NAV_ITEMS.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className="relative text-[#767676] hover:text-primary transition-colors 
                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] 
                    before:bg-primary before:scale-x-0 before:origin-center before:transition-transform 
                    before:duration-300 hover:before:scale-x-100"
            >
                {item.label}
            </Link>
        ))}
    </div>
    
    );
};

export default MenuItems;
