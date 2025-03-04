import Link from "next/link";
import Image from "next/image";

const Logo = ({width,src,hidebar,position}) => {
    return (
        <div className={`flex ${position}  flex-row`}>
            <Link href="/">
                <Image src={src}  alt="Logo" width={width} height={50} />
            </Link>
            <div className={`h-full bg-primary w-3 ${hidebar ? 'hidden': ''}`}></div>
        </div>
    );
};

export default Logo;
