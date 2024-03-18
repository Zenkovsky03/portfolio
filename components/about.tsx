"use client"
import React from 'react'
import SectionHeading from "@/components/section-heading";
import {motion} from "framer-motion";

export default function About(){
    return(
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40" initial={{ opacity:0, y:100 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.175 }}>
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque, aut commodi delectus dolore eaque hic labore minus nihil nisi odio odit omnis, quibusdam, reprehenderit sit soluta vel veniam voluptatem?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, explicabo odit? Amet asperiores, assumenda autem cum cumque cupiditate dolore esse explicabo fuga fugit ipsum iusto molestiae nemo nisi quasi repellendus!
            </p>
        </motion.section>
    )
}