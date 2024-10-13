import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import docHub from "@/public/docHub.png";
import restClient from "@/public/restClient2.png";

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
		title: "Freelancer",
		location: "Remote, India",
		description:
			"Worked with clients across India using Next.js to build responsive websites and platforms.",
		icon: React.createElement(CgWorkAlt),
		date: "2023 - Present",
	},
	{
		title: "SDE Intern",
		location: "Quantiota, France",
		description:
			"Working on frontend development using HTML, CSS, JS, React, and Python. Also contributing to AWS services integration.",
		icon: React.createElement(CgWorkAlt),
		date: "2023 - Present",
	},
	{
		title: "Lead Next.js Developer",
		location: "Epics Stay, India",
		description:
			"Leading frontend development for a real estate and lending startup, building robust Next.js platforms.",
		icon: React.createElement(CgWorkAlt),
		date: "2023 - Present",
	},
	{
		title: "Front end Developer Intern",
		location: "Mydukan (Digiretail Software India Pvt Ltd)",
		description:
			"Developed responsive frontends for the company’s dashboard and app using React and Tailwind CSS (Designed 10+ pages and integrated APIs). Enhanced performance by 30% by rewriting code from Iconic framework to React Native.",
		icon: React.createElement(CgWorkAlt),
		date: "Feb. 2023 - March. 2023",
	},
	{
		title: "Software Engineer Intern",
		location: "Techwhoop, India",
		description:
			"Assisted in deploying and maintaining 5+ applications on cloud platforms (Google Cloud, Heroku), Optimized Python and Node.js apps for production, containerized them, and deployed them using Docker, resulting in a 30% performance boost and up to 20% cost savings.",
		icon: React.createElement(CgWorkAlt),
		date: "Nov. 2022 - Jan. 2023",
	},
	{
		title: "Full Stack Developer Intern",
		location: "Provoke Developers, India",
		description:
			"Developing Responsive Frontend for the company’s platform using Next.js and Tailwind CSS. Worked with Firebase and Next.js for building a content storage platform.",
		icon: React.createElement(CgWorkAlt),
		date: "April. 2022 - May. 2023",
	},
	{
		title: "Computer Science Student",
		location: "VIT Bhopal, India",
		description:
			"Currently I am a computer science student at the VIT Bhopal University.",
		icon: React.createElement(LuGraduationCap),
		date: "2021 - present",
	},
] as const;

export const projectsData = [
	{
		title: "InXribe",
		description:
			"A platform that generates videos using PDFs, converting boring proposals and brochures into engaging videos.",
		tags: ["Python", "AWS", "React", "FFmpeg"],
		imageUrl: docHub, // Placeholder
	},
	{
		title: "Form Builder",
		description:
			"A tool for building clean and easy forms to collect data.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind"],
		imageUrl: docHub, // Placeholder
	},
	{
		title: "PortaLink",
		description:
			"A portfolio builder like Linktree that helps users showcase their content and links in one place.",
		tags: ["React", "Next.js", "Tailwind"],
		imageUrl: docHub, // Placeholder
	},
	{
		title: "SocketScale Chat",
		description:
			"An MLH award-winning project that uses Next.js for frontend. It showcases how to scale WebSocket in production using Redis and synchronize them.",
		tags: ["Next.js", "Redis", "WebSocket"],
		imageUrl: docHub, // Placeholder
	},
	{
		title: "Diagram flow",
		description:
			"A whiteboard platform where you can draw, sketch ideas, and build diagrams. Supports real-time collaboration and file saving.",
		tags: ["React", "Next.js", "Socket.io"],
		imageUrl: docHub, // Placeholder
	},
	{
		title: "Rest Client",
		description:
			"An API client to test your REST API. Supports GET, POST, PUT, PATCH, and DELETE requests. It also has a code editor to write your requests.",
		tags: ["Node.js", "Express"],
		imageUrl: restClient,
	},
	{
		title: "DocHub",
		description:
			"A Google Docs clone. It has a rich text editor and real-time collaboration. It uses Socket.io for the real-time collaboration.",
		tags: ["React", "Socket.io", "MongoDB"],
		imageUrl: docHub,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Express",
	"PostgreSQL",
	"Firebase",
	"Python",
	"AWS",
] as const;
