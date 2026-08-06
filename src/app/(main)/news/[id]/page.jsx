import { getNewsDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const newsDetails = await getNewsDetails(id);

  return {
    title: newsDetails.title,
    description: newsDetails.description,
  };
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const newsDetails = await getNewsDetails(id);

    return (
        <div className="w-full max-w-2xl rounded-md shadow-md my-4 md:my-8 mx-auto px-4 py-6 md:py-8">
            <div className="badge badge-warning">Category #{newsDetails.category_id}</div>

            <h2 className="font-bold text-xl md:text-3xl my-3 leading-snug">
                {newsDetails.title}
            </h2>

            <div className="relative w-full aspect-video rounded-md overflow-hidden my-4 md:my-5">
                <Image
                    src={newsDetails.image_url}
                    alt={newsDetails.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                    priority
                />
            </div>

            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {newsDetails.details}
            </p>

            <Link href={`/category/${newsDetails.category_id}`}>
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md w-full sm:w-auto flex items-center justify-center gap-2 mt-5">
                    <FaArrowLeft /> View Category
                </button>
            </Link>
        </div>
    );
};

export default NewsDetailsPage;