import type { Technology } from "../Type";

export interface TechnologyCardProps {
    Technologies: Technology[];
}

const TechnologyCard = ({ Technologies }: TechnologyCardProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1070px] mx-auto py-8">
            {Technologies.map((tech) => (
                <div 
                    key={tech.id} 
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                    {/* Top Section: Icon & Badge */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="w-10 h-10 object-contain" 
                            />
                            {tech.badge && (
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                                    {tech.badge}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-[#151B2C] mb-2">
                            {tech.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-500 line-clamp-2 mb-6">
                            {tech.description}
                        </p>
                    </div>

                    {/* Bottom Section: Category, Difficulty, Rating & Button */}
                    <div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-4 border-t border-gray-100">
                            <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-700 font-medium">
                                {tech.category}
                            </span>
                            <span>{tech.difficulty}</span>
                            <span className="flex items-center gap-1 font-semibold text-gray-800">
                                <span className="text-amber-400">★</span> {tech.rating}
                            </span>
                        </div>

                        <button className="w-full bg-[#151B2C] hover:bg-black text-white text-sm font-medium py-2.5 rounded-xl transition-colors">
                            Add to Stack
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechnologyCard;