'use client'
import { useState } from 'react';
import Link from "next/link";

const CategoryList = ({ categories, activeId, onItemClick }) => (
    <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2">
        {categories.news_category.map((item, ind) => (
            <li
                key={ind}
                className={`rounded-md transition-colors duration-200 ${
                    activeId === item.category_id
                        ? 'bg-blue-900'
                        : 'bg-white hover:bg-gray-100'
                }`}
            >
                <Link
                    href={`/category/${item.category_id}`}
                    onClick={onItemClick}
                    className={`block pl-4 md:pl-5 py-2 md:py-2.5 text-base md:text-lg lg:text-xl font-bold ${
                        activeId === item.category_id ? 'text-white' : 'text-gray-700'
                    }`}
                >
                    {item.category_name}
                </Link>
            </li>
        ))}
    </ul>
);

const HomeLeftSideBar = ({ categories, activeId }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            {/* Mobile: category trigger button */}
            <div className="lg:hidden col-span-1 mb-2">
                <button
                    onClick={() => setDrawerOpen(true)}
                    className="w-full flex items-center gap-2 bg-white border border-gray-200 rounded-md px-4 py-3 font-semibold text-gray-700"
                >
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Categories
                </button>
            </div>

            {/* Desktop: static sticky sidebar */}
            <div className="hidden lg:block bg-white p-4 col-span-1 rounded-md lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
                <h2 className="p-2 font-bold text-2xl lg:text-3xl">All Categories</h2>
                <CategoryList categories={categories} activeId={activeId} />
            </div>

            {/* Mobile: drawer overlay */}
            {drawerOpen && (
                <div className="lg:hidden fixed inset-0 z-60 flex">
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setDrawerOpen(false)}
                    ></div>

                    <div className="relative bg-white w-[80%] max-w-75 h-full p-4 overflow-y-auto shadow-xl">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="p-2 font-bold text-xl">All Categories</h2>
                            <button
                                onClick={() => setDrawerOpen(false)}
                                className="p-2 text-gray-500"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <CategoryList
                            categories={categories}
                            activeId={activeId}
                            onItemClick={() => setDrawerOpen(false)}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default HomeLeftSideBar;