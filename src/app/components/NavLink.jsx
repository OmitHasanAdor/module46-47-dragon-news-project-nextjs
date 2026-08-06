'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`transition-colors duration-200 hover:text-blue-900 ${
                isActive ? 'text-blue-900 font-semibold border-b-2 border-blue-900 pb-1' : 'text-gray-600'
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;