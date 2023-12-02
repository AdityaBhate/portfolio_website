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
		title: "Data Analytics",
		location: "Omdena Local Chapter",
		description:
			"Contriuted to the Omdena local chapter's community open source project. I worked on Data analytics team where i was responsible for gathering and analyzing satellite data",
		icon: React.createElement(CgWorkAlt),
		date: "Feb. 2023 - March. 2023",
	},
	{
		title: "Software Engineer Intern",
		location: "Techwhoop, India",
		description:
			"I worked as a software engineer intern at a samll company. I mainly worked with cloud services and web development. Delpoyed sereral projects on Google cloud and Heroku using Docker.",
		icon: React.createElement(CgWorkAlt),
		date: "Nov. 2022 - Jan. 2023",
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
			"myCaption is a web app that generates captions for Instagram and Short from content. It uses a AWS services to generate captions for theh video.",
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
