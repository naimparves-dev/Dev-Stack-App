import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../../Type";
import YourStackCard from "./YourStackCard";
import Technologies from "./Technologies";
import TechnologyCard from "./TechnologyCard";



export interface YourStacksProps {
    Technologies: Technology[]
    SelectedTecnologies: Technology[];
    setSelectedTecnologies: Dispatch<SetStateAction<Technology[]>>
}

const YourStacks = ({SelectedTecnologies, setSelectedTecnologies }: YourStacksProps) => {
    
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

            <h2 className="font-semibold">
                Your Stack
            </h2>
            <p>{SelectedTecnologies.length} Technology is Selected</p>

            <div className="mt-4">
                <YourStackCard
                    SelectedTecnologies={SelectedTecnologies}
                    setSelectedTecnologies={setSelectedTecnologies}
                />
            </div>

        </div>
    )
}

export default YourStacks;