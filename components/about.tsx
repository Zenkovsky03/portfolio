"use client"
import React from 'react'
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion";

export default function About(){
    return(
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity:0, y:100 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.175 }} id="about" >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3 ">
                I am an energetic and ambitious person,
                committed to a career in IT. In addition to
                University, I am passionate about developing my
                programming interests,
                I am also fascinated by news from the world of
                sneakerhead.
            </p>
        </motion.section>
    )
}