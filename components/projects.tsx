"use client"
import React, {useEffect, useRef} from 'react'
import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useSectionInView} from "@/lib/hooks";

export default function Projects(){
    const { ref } = useSectionInView("Projects", 0.5)
    // const {ref, inView} = useInView({
    //     threshold: 0.5,
    // })
    // const {setActiveSection, timeOfLastClick} =  useActiveSectionContext()
    // useEffect(() => {
    //     if(inView && Date.now() - timeOfLastClick > 1000){
    //         setActiveSection("Projects");
    //     }
    // }, [inView, setActiveSection, timeOfLastClick])
    return (
        <section id="projects" className="scroll-mt-28" ref={ref}>
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

