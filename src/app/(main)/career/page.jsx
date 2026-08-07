export const metadata = {
  title: "Career | Dragon News",
  description: "Best news portal in Bangladesh",
};

const openPositions = [
    {
        title: "Senior Reporter",
        department: "News Desk",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
    },
    {
        title: "Photojournalist",
        department: "Media Team",
        location: "Chattogram, Bangladesh",
        type: "Full-time",
    },
    {
        title: "Content Editor",
        department: "Editorial",
        location: "Dhaka, Bangladesh",
        type: "Full-time",
    },
    {
        title: "Social Media Manager",
        department: "Marketing",
        location: "Remote",
        type: "Part-time",
    },
];

const CareerPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-blue-900 text-center mb-3">
                Careers at Dragon News
            </h1>
            <p className="text-center text-gray-500 mb-8 md:mb-10">
                Join our team and help shape the future of journalism
            </p>

            {/* Why work with us */}
            <div className="bg-white rounded-md shadow-md p-5 md:p-8 mb-8">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                    Why Work With Us
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                    At Dragon News, we believe great journalism starts with great people. We offer
                    a collaborative newsroom culture, opportunities to cover stories that matter, and
                    the resources to grow your career in media and journalism.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100 text-center">
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">4+</p>
                        <p className="text-xs md:text-sm text-gray-500">Open Roles</p>
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">500+</p>
                        <p className="text-xs md:text-sm text-gray-500">Team Members</p>
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">6</p>
                        <p className="text-xs md:text-sm text-gray-500">Office Locations</p>
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">10+</p>
                        <p className="text-xs md:text-sm text-gray-500">Years Growing</p>
                    </div>
                </div>
            </div>

            {/* Open positions */}
            <div className="bg-white rounded-md shadow-md p-5 md:p-8">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                    Open Positions
                </h2>
                <div className="space-y-3">
                    {openPositions.map((job, ind) => (
                        <div
                            key={ind}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-200 rounded-md p-4 hover:border-blue-900 transition-colors"
                        >
                            <div>
                                <h3 className="font-bold text-gray-800">{job.title}</h3>
                                <p className="text-sm text-gray-500">
                                    {job.department} · {job.location}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <span className="badge badge-outline text-blue-900 border-blue-900">
                                    {job.type}
                                </span>
                                <button className="btn btn-sm bg-blue-900 hover:bg-blue-800 text-white border-none">
                                    Apply
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerPage;