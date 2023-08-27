import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SapPortal from "@/public/assets/sapportal.png";
import ergomart from "@/public/assets/ergomart.jpeg";
import resumebulider from "@/public/assets/resumeBulider.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Developer Incharge",
    location: "Kopergoan, IN",
    description:
      "I am a full-stack developer, proficient in creating and managing websites, including our college's site, and developing an intuitive student portal for enhanced user experiences.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Pune, IN",
    description:
      "I worked as a Full-Stack Developer Intern for 3 Month in 1 job and They offer me full time offer. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Developer",
    location: "Pune, IN",
    description:
      "I'm now a Software Developer working as a full time. My stack includes Node.js, Spring Boot, Flutter, React.js, MySQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SapPortal",
    description:
      "I worked as a full-stack developer on this project for 2 years. This is develop for admission process and management purpose of SAP student at our College.",
    tags: ["React", "Spring Boot", "MySQL", "Swagger", "RazorPay"],
    imageUrl: SapPortal,
  },
  {
    title: "Vrindavan Dairy",
    description:
      "I was the Full Stack developer. It has features like Subscribe Model, Payment Gateway,Push Notification and pagination.",
    tags: ["Flutter", "SpringBoot", "MySQL", "AWS", "RazorPay"],
    imageUrl: ergomart,
  },
  {
    title: "Resume Builder",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "PDF Generator", "Tailwind"],
    imageUrl: resumebulider,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Dart",
  "React",
  "Node.js",
  "Spring Boot",
  "Flutter",
  "Docker",
  "AWS",
  "Git",
  "GitHub",
  "Tailwind",
  "MySQL",
  "MongoDB",
  "Redux",
  "Hibernate",
  
] as const;
