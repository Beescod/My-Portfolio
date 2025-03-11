import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, info } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Card = ({ index, title, icon, small, link }) => (
  <Tilt
    className={`w-full ${small ? 'xs:w-[130px]' : 'xs:w-[250px]'}`}
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[${small ? '180px' : '280px'}] flex justify-evenly items-center flex-col`}
      >
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <img
            src={icon}
            alt={title}
            className={`object-contain ${small ? 'w-10 h-10' : 'w-16 h-16'}`}
          />
          <h3 className={`text-white font-bold text-center ${small ? 'text-[14px]' : 'text-[20px]'}`}>
            {title}
          </h3>
        </a>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        I'm a Full-Stack Developer with expertise in JavaScript, TypeScript,
        and frameworks like React, Next.js, React Native, and Node.js.
        I also design sleek UI/UX experiences with Figma and craft stunning visuals.
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>
      
      <div className='mt-2 flex flex-wrap gap-5'>
        {info.map((service, index) => (
          <Card key={service.title} index={index} {...service} small />
        ))}
      </div>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");