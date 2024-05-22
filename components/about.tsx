"use client"
import React, {useEffect} from 'react'
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useSectionInView} from "@/lib/hooks";

export default function About(){
    const { ref } = useSectionInView("About")
    // const {ref, inView} = useInView({
    //     threshold: 0.75,
    // })
    // const {setActiveSection, timeOfLastClick} =  useActiveSectionContext()
    // useEffect(() => {
    //     if(inView && Date.now() - timeOfLastClick > 1000){
    //         setActiveSection("About");
    //     }
    // }, [inView, setActiveSection, timeOfLastClick])

    return(
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity:0, y:100 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.175 }} id="about" ref={ref} >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3 ">
                loremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem

            </p>
        </motion.section>
    )
}