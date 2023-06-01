"use client"
import { type } from 'os'
import React from 'react'
import Image from 'next/image';
import about from '../public/images/about.jpeg';
import { motion } from 'framer-motion';

type Props = {};

const About = () => {
    const AnimatedImage = motion(Image);
  return (
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}} 
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercas tracking-[20px] text-gray-500 text-2xl">About</h3>

      <AnimatedImage
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true}}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src={about}
        alt="profile picture" 
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
            Here is a {" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background
        </h4>
        <p className="text-base">
        Hello, my name is Azedine Ouhadou, and I am a software engineering student at 1337 coding school. I am passionate about the world of technology and dedicated to honing my skills as a software engineer.

        Throughout my journey as a student, I have been exposed to various programming languages and technologies, allowing me to develop a versatile skill set. I have a keen interest in front-end development and enjoy creating intuitive user interfaces that provide seamless experiences for users.

        At 1337 coding school, I am immersed in a dynamic and collaborative learning environment that fosters growth and encourages problem-solving. I actively seek opportunities to work on innovative projects, expand my knowledge, and enhance my abilities as a software engineer.

        Driven by a curiosity for new technologies and a desire to make a positive impact, I am always eager to embrace challenges and learn from real-world experiences. I am committed to continuously improving my skills and staying up-to-date with the latest industry trends.

        I look forward to applying my knowledge and passion to contribute to the ever-evolving field of software engineering.
        </p>
      </div>

    </motion.div>
  )
}

export default About;
