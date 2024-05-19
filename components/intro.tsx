"use client";

import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import {FaGithubSquare} from "react-icons/fa";

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "tween", duration: 0.2}}>
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

            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}}>

                <span className="font-bold">Hello, I'm Mateusz.</span> I'm a{" "}
                <span className="font-bold">software developer</span> I enjoy
                learning and creating<span className="italic"> webpage</span>. My focus is{" "}
                <span className="underline">Python (Django & DRF)</span>.

            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                        initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1,}}>

                <Link href="#contact" className=" group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
                 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/></Link>

                <a href="/Zaniewski_Mateusz_CV.pdf" download className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
                 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10">Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/></a>

                <a href="https://www.linkedin.com/in/mateusz-zaniewski-43a394220/" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110
                 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10"><BsLinkedin/></a>

                <a href="https://github.com/Zenkovsky03" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-110
                 hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10"><FaGithubSquare/></a>

            </motion.div>
        </section>
    )
}