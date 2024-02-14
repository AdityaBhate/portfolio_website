import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import docHub from "@/public/docHub.png";
import fileNest from "@/public/fileNest.png";
import restClient from "@/public/restClient2.png";
import captionGenerator from "@/public/captionGenerator.png";

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
			"Developing Responsive Frontend for the company’s platform using Next.js and Tailwind CSS. Worked with Firebase and Next.js for building a content storage platform",
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
		title: "Caption Generator",
		description:
			"myCaption is a web app that generates captions for Instagram and Short from content. It uses AWS services to generate captions for the video.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "AWS"],
		imageUrl: captionGenerator,
	},
	{
		title: "DocHub",
		description:
			"A Google Docs clone. It has a rich text editor and real-time collaboration. It uses Socket.io for the real-time collaboration.",
		tags: ["React", "Socket.io", "MongoDB"],
		imageUrl: docHub,
	},
	{
		title: "FileNest",
		description:
			"A Google Drive CLone with a file explorer. Create files and folders to organize and save your files on the cloud. Supports file upload and download.",
		tags: ["React", "Next.js", "MongoDB", "Firebase"],
		imageUrl: fileNest,
	},
	{
		title: "Rest Client",
		description:
			"An API client to test your REST API. Supports GET, POST, PUT, PATCH and DELETE requests. It also has a code editor to write your requests.",
		tags: ["Node.js", "Express"],
		imageUrl: restClient,
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
	"Firebases",
	"Python",
	"AWS",
] as const;
