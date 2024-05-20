import React, {useRef} from 'react'
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";

export default function Projects(){
    return (
        <section id="projects" className="scroll-mt-28">
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

