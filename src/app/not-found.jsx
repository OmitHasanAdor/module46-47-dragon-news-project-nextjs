import Link from "next/link";
import { FaHome, FaNewspaper } from "react-icons/fa";
import { GiDragonHead } from "react-icons/gi";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">

            {/* Big background 404 */}
            <p className="absolute top-10 md:top-16 text-[8rem] md:text-[12rem] font-extrabold text-blue-900/5 select-none leading-none">
                404
            </p>

            {/* Visual Icon */}
            <div className="relative mb-6 md:mb-8">
                <div className="absolute inset-0 rounded-full bg-blue-900/10 blur-xl scale-110"></div>
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-blue-100">
                    <GiDragonHead className="w-12 h-12 md:w-14 md:h-14 text-blue-900" />
                </div>
            </div>

            {/* Error Message */}
            <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
                Page Turned to Ash!
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-md mb-6 md:mb-8 leading-relaxed">
                The scroll you are looking for has been misplaced or incinerated by our resident dragon.
                Don&apos;t worry, the rest of the kingdom&apos;s news is still intact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                    <FaHome className="w-4 h-4" />
                    Back to the Lair (Home)
                </Link>

                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                    <FaNewspaper className="w-4 h-4" />
                    Read Latest News
                </Link>
            </div>

            {/* Decorative Background Element */}
            <div className="fixed bottom-0 left-0 w-full h-1 bg-linear-to-r from-blue-900 via-blue-600 to-blue-900" />
        </div>
    );
};

export default NotFound;