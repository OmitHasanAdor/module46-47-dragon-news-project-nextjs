'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = (
        <>
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/about">About</NavLink></li>
            <li><NavLink href="/career">Career</NavLink></li>
        </>
    );

    return (
        <div className="bg-white shadow-sm sticky top-0 z-50">
            <div className="flex items-center justify-between max-w-[90%] md:max-w-[85%] mx-auto py-4">

                {/* Logo / Brand */}
                <Link href="/" className="text-xl md:text-2xl font-bold text-blue-900">
                    Dragon News
                </Link>

                {/* Desktop nav links */}
                <ul className="hidden md:flex justify-center items-center gap-6 text-gray-700 font-medium">
                    {navItems}
                </ul>

                {/* Desktop auth section */}
                <div className="hidden md:flex items-center gap-4">
                    {isPending ? (
                        <span className="loading loading-spinner loading-md text-blue-900"></span>
                    ) : user ? (
                        <div className="flex items-center gap-3">
                            <h2 className="text-sm text-gray-700">Hello, {user.name}</h2>
                            <Image
                                src={user?.image || avatar}
                                alt="User Avatar"
                                width={36}
                                height={36}
                                className="rounded-full"
                            />
                            <button
                                className="btn btn-sm bg-blue-900 hover:bg-blue-800 text-white border-none"
                                onClick={async () => await authClient.signOut()}
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link href="/signin">
                            <button className="btn btn-sm bg-blue-900 hover:bg-blue-800 text-white border-none">
                                Sign In
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden text-blue-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
                    <ul className="flex flex-col gap-3 text-gray-700 font-medium">
                        {navItems}
                    </ul>

                    <div className="pt-2 border-t border-gray-100">
                        {isPending ? (
                            <span className="loading loading-spinner loading-md text-blue-900"></span>
                        ) : user ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={user?.image || avatar}
                                        alt="User Avatar"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                    <span className="text-sm">{user.name}</span>
                                </div>
                                <button
                                    className="btn btn-sm bg-blue-900 hover:bg-blue-800 text-white border-none"
                                    onClick={async () => await authClient.signOut()}
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <Link href="/signin" className="block w-full">
                                <button className="btn btn-sm w-full bg-blue-900 hover:bg-blue-800 text-white border-none">
                                    Sign In
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;