"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id='about'>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-3'>
				Currently studing <span className='font-medium'>Computer Science</span>,
				I have been coding since 2020. I started with python and later decided
				to learn <span className='font-medium'>full-stack web development</span>
				. <span className='italic'>My favorite part of developing</span> is
				building and exploring new stuff. I{" "}
				<span className='underline'>love</span> building new stuff or cloning
				existing stuff to figruing out how it works.
				<span className='font-medium'>
					I work with React, Next.js, Node.js, MongDB, Firebase and AWS
				</span>
				. I am also familiar with TypeScript and Prisma. I am always looking to
				learn new technologies. I am open for a{" "}
				<span className='font-medium'>chance</span> to work on new exciting
				things.
			</p>

			<p>
				<span className='italic'>When I'm not coding</span>, I enjoy Reading
				books and blogging about new technologies on medium.com and other
				blogging websites. I also enjoy{" "}
				<span className='font-medium'>learning new things</span>. I am currently
				preparing for <span className='font-medium'>AWS certifications</span>. I
				also play basketball and badminton when i have the chance.
			</p>
		</motion.section>
	);
}
