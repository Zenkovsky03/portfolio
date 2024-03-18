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
        date: "2019 - 2023",
    },
    {
        title: "BlueRider",
        location: "Bialystok",
        description:
            "My first expirience in IT job",
        icon: React.createElement(LuGraduationCap),
        date: "july 2022",
    },
    {
        title: "PB",
        location: "Bialystok",
        description:
            "Student Computer Science",
        icon: React.createElement(LuGraduationCap),
        date: "2023 - now",
    },
] as const;

export const projectsData = [
    {
        title: "CorgyConnect",
        description:
            "A website dedicated to dog lover built using django, drf and templates",
        tags: ["HTML", "CSS", "POSTGRES", "Django", "Python", "DRF"],
        imageUrl: defaultJPG,
    },
    {
        title: "DreamJob",
        description:
            "A site looks like clone justjoin.it",
        tags: ["Next.js", "CSS", "POSTGRES", "Django", "Python"],
        imageUrl: defaultJPG,
    },
    {
        title: "drinksAPI",
        description:
            "Simple API for my fav drinks",
        tags: ["Django", "Python", "DRF"],
        imageUrl: defaultJPG,
    },
    {
        title: "myNote",
        description:
            "Notebook made in django and react",
        tags: ["Django", "Python", "DRF", "React", "CSS", "HTML", "Javascript"],
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