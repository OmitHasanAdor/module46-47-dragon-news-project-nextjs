export const metadata = {
  title: "Contact | Dragon News",
  description: "Get in touch with Dragon News",
};

const ContactPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            <h1 className="text-2xl md:text-4xl font-bold text-blue-900 text-center mb-3">
                Contact Us
            </h1>
            <p className="text-center text-gray-500 mb-8 md:mb-10">
                We&apos;d love to hear from you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact info */}
                <div className="bg-white rounded-md shadow-md p-5 md:p-6 space-y-4">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800">Get In Touch</h2>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">Address</p>
                        <p className="text-sm md:text-base text-gray-500">
                            123 Press Avenue, Dhaka, Bangladesh
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">Email</p>
                        <p className="text-sm md:text-base text-gray-500">contact@dragonnews.com</p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">Phone</p>
                        <p className="text-sm md:text-base text-gray-500">+880 1234-567890</p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-700">Office Hours</p>
                        <p className="text-sm md:text-base text-gray-500">Sunday – Thursday, 9:00 AM – 6:00 PM</p>
                    </div>
                </div>

                {/* Contact form */}
                <div className="bg-white rounded-md shadow-md p-5 md:p-6">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Send a Message</h2>
                    <form className="space-y-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                        <button
                            type="submit"
                            className="btn bg-blue-900 hover:bg-blue-800 text-white border-none w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;