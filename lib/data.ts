import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import defaultJPG from "@/public/default.jpg";
import CorgyConnect from "@/public/CorgyConnect.png";
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
        title: "Secondary Technical School of Electrical Engineering",
        location: "Bialystok",
        description:
            "Programming technician, INF04, INF03",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2023",
    },
    {
        title: "BlueRider.Software",
        location: "Bialystok",
        description:
            "Project Manager Internship",
        icon: React.createElement(LuGraduationCap),
        date: "june -july 2022",
    },
    {
        title: "Bialystok University of Technology",
        location: "Bialystok",
        description:
            "Computer science",
        icon: React.createElement(LuGraduationCap),
        date: "2023 - 2027",
    },
] as const;

export const projectsData = [
    {
        title: "CorgyConnect",
        description:
            "A website dedicated to dog lover built using django, drf and templates",
        tags: ["HTML", "CSS", "POSTGRES", "Django", "Python", "DRF"],
        imageUrl: CorgyConnect,
    },
    {
        title: "itGateway",
        description:
            "A site looks like clone justjoin.it",
        tags: ["Next.js", "CSS", "POSTGRES", "Django", "Python", "AWS", "maprequest"],
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