import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import defaultJPG from "@/public/default.jpg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Journey",
        hash: "#journey",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "ZSE",
        location: "Bialystok",
        description:
            "I graduated after 4 years of studying. I immediately found a job as a backend-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019-2023",
    },
] as const;

export const projectsData = [
    {
        title: "CorgyConnect",
        description:
            "Its a blog site where you can drscribe your dog",
        tags: ["HTML", "CSS", "POSTGRES", "Django", "Python"],
        imageUrl: defaultJPG,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "SQLite",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
    "DRF",
] as const;