    import type { Dispatch, SetStateAction } from "react";
    import type { Technology } from "../../Type";
    import YourStackCard from "./YourStackCard";



    export interface YourStacksProps {
        Technologies: Technology[]
        SelectedTecnologies: Technology[];
        setSelectedTecnologies: Dispatch<SetStateAction<Technology[]>>
    }

    const YourStacks = ({SelectedTecnologies, setSelectedTecnologies }: YourStacksProps) => {
        
        return (
            <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

                <h2 className="font-bold text-[16px]">
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