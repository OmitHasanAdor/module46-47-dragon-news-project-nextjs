const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white gap-6">
            {/* Animated ring with pulsing dot */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-blue-900 border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-900 animate-pulse"></span>
                </div>
            </div>

            {/* Brand text */}
            <div className="text-center space-y-1">
                <p className="text-lg md:text-xl font-bold text-blue-900 tracking-wide">
                    Dragon News
                </p>
                <p className="text-xs md:text-sm text-gray-400 animate-pulse">
                    Fetching the latest stories...
                </p>
            </div>
        </div>
    );
};

export default Loading;