import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ({ newsByCategory }) => {
    return (
        <div className="bg-white p-3 md:p-4 col-span-1 md:col-span-2 rounded-md">
            <h2 className="font-bold text-xl md:text-2xl">All News</h2>

            <div className="space-y-4 md:space-y-5 mt-3">
                {newsByCategory.length === 0 ? (
                    <div className="flex justify-center items-center py-20">
                        <p className="text-center text-xl md:text-2xl text-blue-900 font-extrabold">
                            No news available
                        </p>
                    </div>
                ) : (
                    newsByCategory.map((news) => (
                        <div key={news._id} className="p-2 md:p-3 rounded-md shadow-md border border-gray-100">
                            {/* Author header */}
                            <div className="flex gap-3 justify-between items-center bg-gray-100 p-2.5 md:p-3 rounded-md">
                                <div className="flex items-center justify-start gap-2 md:gap-3 min-w-0">
                                    <div className="shrink-0">
                                        <Image
                                            src={news.author?.img}
                                            alt={news.author?.name || news.title}
                                            width={30}
                                            height={30}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-bold text-sm md:text-lg truncate">
                                            {news.author.name}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-600">
                                            {news.author.published_date}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 md:gap-5 text-gray-500 shrink-0">
                                    <span><FaBookmark /></span>
                                    <span><FaShareAlt /></span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-2 md:mt-3">
                                <h2 className="font-bold text-lg md:text-2xl leading-snug">
                                    {news.title}
                                </h2>

                                <div className="relative w-full aspect-video mt-2 rounded-md overflow-hidden">
                                    <Image
                                        src={news.image_url}
                                        alt={news.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 66vw"
                                        className="object-cover"
                                    />
                                </div>

                                <p className="text-sm md:text-base text-gray-500 line-clamp-3 mt-2">
                                    {news.description}
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between py-2.5 md:py-3 gap-3 md:gap-5">
                                <div className="flex items-center gap-3 md:gap-5 text-gray-500 text-sm md:text-base">
                                    <div className="flex items-center gap-1">
                                        <FaStar /> {news.rating.number}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaEye /> {news.total_view}
                                    </div>
                                </div>
                                <div>
                                    <Link href={`/news/${news._id}`}>
                                        <button className="bg-blue-900 hover:bg-blue-800 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md text-sm md:text-base whitespace-nowrap">
                                            See Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NewsCard;