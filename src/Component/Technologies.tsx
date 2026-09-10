import { use } from "react";
import type { Technology } from "../Type";
import TechnologyCard from "./TechnologyCard";
import YourStackCard from "./YourStackCard";


export interface TechnologiesProps {
    TechnologiesPromise: Promise<Technology[]>
}

const Technologies = ({ TechnologiesPromise }: TechnologiesProps) => {
    const Technologies = use(TechnologiesPromise)
    console.log(Technologies, "ddddddddddddddd");

    return (
        <section className="max-w-[1200px] mx-auto px-5 mt-20">
            <h2 className="text-3xl font-bold text-[#111827]">
                Explore the{" "}
                <span className="bg-gradient-to-r from-[#FF512F] to-[#C026D3] bg-clip-text text-transparent">
                    Technologies
                </span>
            </h2>
            <p className="mt-1 text-sm text-gray-500">Pick one technology per category to build your ideal stack.</p>

            <div className="grid grid-cols-12 gap-7">

                {/* left side explore all*/}
                <div className="grid col-span-9">
                    <TechnologyCard Technologies={Technologies}></TechnologyCard>

                </div>


                {/* right side for your stack */}
                <div className="grid col-span-3">
                    <YourStackCard Technologies={Technologies}></YourStackCard>

                </div>
            </div>
        </section>
    )
}

export default Technologies;