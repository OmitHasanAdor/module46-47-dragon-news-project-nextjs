import Image from 'next/image';
import swimming from '@/assets/swimming.png';
import classImg from '@/assets/class.png';
import playground from '@/assets/playground.png';

const zoneItems = [
    { title: 'Swimming', image: swimming },
    { title: 'Class', image: classImg },
    { title: 'Play Ground', image: playground },
];

const QZone = () => {
    return (
        <div className="space-y-3 md:space-y-4 col-span-1 bg-white p-4 rounded-md">
            <h2 className="text-xl md:text-2xl font-bold">Q-Zone</h2>
            <div className="space-y-4">
                {zoneItems.map((item, ind) => (
                    <div
                        key={ind}
                        className="rounded-md overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                    >
                        <div className="relative w-full h-35 md:h-40">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="text-center font-semibold py-2 text-gray-700">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QZone;