'use client'
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import QZone from './QZone';

const HomeRightSide = () => {
    const handleGoogleSign = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    };
    const handleGitHubSign = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        });
        console.log(data);
    };

    return (
        <div className="space-y-5 col-span-1 bg-white p-4 rounded-md md:sticky md:top-20 md:self-start md:max-h-[calc(100vh-6rem)] md:overflow-y-auto">
            <h2 className="text-xl md:text-2xl font-bold">Login With</h2>
            <div className="flex flex-col gap-3 md:gap-4">
                <button
                    className="btn btn-outline btn-info btn-sm md:btn-md"
                    onClick={handleGoogleSign}
                >
                    <FaGoogle /> Login with Google
                </button>
                <button
                    className="btn btn-outline btn-success btn-sm md:btn-md"
                    onClick={handleGitHubSign}
                >
                    <FaGithub /> Login with GitHub
                </button>
            </div>

         <h2 className="text-xl md:text-2xl font-bold">Find Us On</h2>
<div>
    <ul className="space-y-2">
        <li>
            <Link
                href="#"
                className="w-full text-center flex justify-center items-center border-2 text-gray-500 font-bold border-gray-300 hover:border-blue-900 hover:text-blue-900 transition-colors py-2.5 md:py-3 rounded-md gap-2"
            >
                <FaFacebookF className="w-5 h-5" />
                <span>Facebook</span>
            </Link>
        </li>
        <li>
            <Link
                href="#"
                className="w-full text-center flex justify-center items-center border-2 text-gray-500 font-bold border-gray-300 hover:border-blue-900 hover:text-blue-900 transition-colors py-2.5 md:py-3 rounded-md gap-2"
            >
                <FaTwitter className="w-5 h-5" />
                <span>Twitter</span>
            </Link>
        </li>
        <li>
            <Link
                href="#"
                className="w-full text-center flex justify-center items-center border-2 text-gray-500 font-bold border-gray-300 hover:border-blue-900 hover:text-blue-900 transition-colors py-2.5 md:py-3 rounded-md gap-2"
            >
                <FaInstagram className="w-5 h-5" />
                <span>Instagram</span>
            </Link>
        </li>
    </ul>
</div>
            <QZone />
        </div>
    );
};

export default HomeRightSide;