export const metadata = {
  title: "About | Dragon News",
  description: "Best news portal in Bangladesh",
};

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-blue-900 text-center mb-3">
                About Dragon News
            </h1>
            <p className="text-center text-gray-500 mb-8 md:mb-10">
                Journalism Without Fear or Favour
            </p>

            <div className="bg-white rounded-md shadow-md p-5 md:p-8 space-y-5 md:space-y-6">
                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Who We Are</h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        Dragon News is a leading digital news portal committed to delivering accurate,
                        unbiased, and timely news coverage to readers across the country. Founded with
                        a mission to inform and empower the public, we cover everything from breaking
                        news and politics to sports, entertainment, and culture.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Our Mission</h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        We believe in the power of honest journalism. Our team of dedicated reporters
                        and editors work around the clock to bring you stories that matter — verified,
                        fact-checked, and presented without bias or fear of consequence.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">What We Cover</h2>
                    <ul className="text-sm md:text-base text-gray-600 leading-relaxed list-disc list-inside space-y-1">
                        <li>Breaking National & International News</li>
                        <li>Politics & Government Affairs</li>
                        <li>Sports & Entertainment</li>
                        <li>Culture, Arts & Lifestyle</li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100 text-center">
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">10+</p>
                        <p className="text-xs md:text-sm text-gray-500">Years Active</p>
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">500+</p>
                        <p className="text-xs md:text-sm text-gray-500">Reporters</p>
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">1M+</p>
                        <p className="text-xs md:text-sm text-gray-500">Daily Readers</p>
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl font-bold text-blue-900">50+</p>
                        <p className="text-xs md:text-sm text-gray-500">Categories</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;