"use client";

import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion";

export default function Intro(){
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{ type: "tween", duration: 0.2 }}>
                        <Image
                            src="/profile_image.jpg"
                            alt="Matthew Zanesky Image"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}>
                <span className="font-bold">Hello, I'm Mateusz.</span> I'm a{" "}
                <span className="font-bold">backend developer</span> I enjoy
                learning and creating<span className="italic"> webpage</span>. My focus is{" "}
                <span className="underline">Python (Django & DRF)</span>.
            </motion.p>
        </section>
    )
}