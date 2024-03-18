import React from 'react'
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
export default function Projects(){
    return (
        <section>
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    // bo map potrzebuje pojedynczego elementu dlatego jest React Fragment ...project jest to rozpkowanie kazdego projektu(jego wlasciwosci)
                    projectsData.map((project, index) =>(
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>

                    ))
                }
            </div>
        </section>
    );
}

type ProjectProps = (typeof projectsData)[number];

function Project({
    title,
    description,
    tags,
    imageUrl

}:ProjectProps){
    return <div>{title}</div>
}