import { type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../../Type";
import { IoClose } from "react-icons/io5";





export interface YourStackCardProps {
    SelectedTecnologies: Technology[];
    setSelectedTecnologies: Dispatch<SetStateAction<Technology[]>>
}

const YourStackCard = ({ SelectedTecnologies, setSelectedTecnologies }: YourStackCardProps) => {


    const handelRemoveStack = (Technology: Technology) => {
        const restStack = SelectedTecnologies.filter(SelectedTecnologie => SelectedTecnologie.id !== Technology.id)
        setSelectedTecnologies(restStack)
    }
    const handleRemoveAll = () => {
        setSelectedTecnologies([]);
    };
    return (
        <div className="space-y-3">
            {SelectedTecnologies.map((tech) => (
                <div
                    key={tech.id}
                    className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 bg-white"
                >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-7 h-7 object-contain"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900">
                            {tech.name}
                        </h3>

                        <p className="text-xs text-gray-500 mt-1">
                            {tech.category}
                        </p>
                    </div>

                    {/* Close */}
                    <button onClick={() => handelRemoveStack(tech)} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition">
                        <IoClose size={20} />
                    </button>
                </div>

            ))}
            <div>
                {SelectedTecnologies.length > 0 && (
                    <button
                        onClick={handleRemoveAll}
                        className="w-full mt-4 border border-red-300 text-red-500 font-medium rounded-xl py-2 hover:bg-red-50 transition-colors"
                    >
                        Remove All
                    </button>
                )}
            </div>
        </div>

    )
}

export default YourStackCard;