import { useState, type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../../Type";

export interface TechnologyCardProps {
    techs: Technology;
    SelectedTecnologies: Technology[];
    setSelectedTecnologies: Dispatch<SetStateAction<Technology[]>>
}

const TechnologyCard = ({ techs, SelectedTecnologies, setSelectedTecnologies }: TechnologyCardProps) => {
    const isSelected = SelectedTecnologies.some(
        tech => tech.id === techs.id
    );

    const handelSelectedTechnologies = () => {
        setSelectedTecnologies([...SelectedTecnologies, techs])
    }

    return (
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">

            {/* Top Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <img
                        src={techs.icon}
                        alt={techs.name}
                        className="w-10 h-10 object-contain"
                    />

                    {techs.badge && (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                            {techs.badge}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#151B2C] mb-2">
                    {techs.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-2 mb-6">
                    {techs.description}
                </p>
            </div>

            {/* Bottom Section */}
            <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-4 border-t border-gray-100">
                    <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-700 font-medium">
                        {techs.category}
                    </span>

                    <span>{techs.difficulty}</span>

                    <span className="flex items-center gap-1 font-semibold text-gray-800">
                        <span className="text-amber-400">★</span>
                        {techs.rating}
                    </span>
                </div>

                <button onClick={() => handelSelectedTechnologies()} className="w-full disabled:bg-gray-400 bg-[#151B2C] hover:bg-black text-white text-sm font-medium py-2.5 rounded-xl transition-colors" disabled={isSelected}>
                    {isSelected ? "Selected" : "Add to Stack"}
                </button>
            </div>

        </div>
    );
};

export default TechnologyCard;