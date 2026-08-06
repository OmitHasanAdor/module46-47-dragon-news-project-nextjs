import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="pt-6 md:pt-8 pb-2 px-4 space-y-3 md:space-y-5 flex flex-col items-center justify-center text-center">
            <Image
                src={logo}
                alt="Dragon News Logo"
                className="w-55 sm:w-75 md:w-95 h-auto"
                priority
            />
            <p className="text-sm md:text-base text-gray-500">
                Journalism Without Fear or Favour
            </p>
            <p className="text-xs md:text-sm text-gray-400">
                {format(new Date(), "EEEE, LLLL dd, yyyy")}
            </p>
        </div>
    );
};

export default Header;