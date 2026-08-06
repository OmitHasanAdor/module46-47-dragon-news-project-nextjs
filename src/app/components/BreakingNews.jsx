import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-start gap-3 md:gap-5 py-2 px-3 md:px-4 mx-auto max-w-[92%] md:max-w-[85%] rounded-md">
            <button className="btn btn-sm md:btn-md bg-blue-900 hover:bg-blue-800 text-white border-none whitespace-nowrap shrink-0">
                Latest News
            </button>
            <Marquee pauseOnHover={true} className="text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla facilis atque rerum unde soluta eligendi consequuntur dolorum commodi incidunt. Nemo ipsum dolores obcaecati, ipsa possimus pariatur at magni, nulla tenetur, et dolorum! Doloribus impedit minus laudantium libero.
            </Marquee>
        </div>
    );
};

export default BreakingNews;