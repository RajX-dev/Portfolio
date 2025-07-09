import { abilities } from "../constants";

const FeatureCards = () => (
    <div className="w-full padding-x-lg">
        <div className="mx-auto grid-3-cols">
            {abilities.map(({ imgPath, title, desc }) => (
                <div
                    key={title}
                    className="card-border xl:rounded-md p-10 flex flex-col gap-5"
                >
                    <div className="size-14 flex items-center justify-center rounded-md">
                        <img src={imgPath} alt={title} />
                    </div>
                    <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                    <p className="text-red-50 text-lg">{desc}</p>
                </div>
            ))}
        </div>
    </div>
);

export default FeatureCards;