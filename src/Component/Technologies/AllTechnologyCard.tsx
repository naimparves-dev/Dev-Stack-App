
import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../../Type";
import TechnologyCard from "./TechnologyCard";

export interface AllTechnologyCardProps {
    Technologies: Technology[];
    SelectedTecnologies:Technology[];
    setSelectedTecnologies:Dispatch<SetStateAction<Technology[]>>
}

const AllTechnologyCard = ({ Technologies,SelectedTecnologies,setSelectedTecnologies }: AllTechnologyCardProps) => {
    
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1070px] mx-auto py-8">
            {Technologies.map((tech) => (
                <TechnologyCard techs={tech}  SelectedTecnologies={SelectedTecnologies} setSelectedTecnologies={setSelectedTecnologies}></TechnologyCard>
            ))}
        </div>
    );
};

export default AllTechnologyCard;