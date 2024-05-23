"use client";
import React from 'react'
import SectionHeading from "./section-heading";
import {SideSkillsData, skillsData} from "@/lib/data";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills(){
    const { ref } = useSectionInView("Skills", 0.5)
    return(
        <section id="skills"  className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" ref={ref}>
            <SectionHeading>I regularly use:</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-14">
                {skillsData.map((skill, index) => (
                    <motion.li variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={index} key={index} className="bg-white border border-black/[0.1] rounded-xl px-5 py-3">{skill}</motion.li>
                ))}
            </ul>
            <SectionHeading>I have had contact with:</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {SideSkillsData.map((skill, index) => (
                    <motion.li variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={index} key={index} className="bg-white border border-black/[0.1] rounded-xl px-5 py-3">{skill}</motion.li>
                ))}
            </ul>
        </section>
    )
}