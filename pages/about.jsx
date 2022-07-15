import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import Image from 'next/image';
import { CgUserlane } from 'react-icons/cg';
import { FaUserTie } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { MdEngineering } from 'react-icons/md';
import { IconFadeOutHover, TextDown } from '../components/utils/FrameMotion';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function about() {

  const secPopOut = {
    hidden: {
      opacity: 0, scale: 0.8
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3, type: 'spring', stiffness: 400
      }
    }
  };

  const SectionTitle = ({ children, title }) => {
    return (
      <TextDown>
        <div className="mb-2 flex items-center text-xl sm:text-2xl z-0">
          <div className="m-2 animate-waving-hand flex text-red-500 bg-teal-400 bg-opacity-10 rounded-full p-1">
            {children}
          </div>
          <h1 className=" text-gray-500">{title}</h1>
        </div>
      </TextDown>
    );
  }

  const SkillImg = ({ link, name }) => {
    return (
      <IconFadeOutHover>
        <div className="p-1 mx-2 hover:animate-waving-hand">
          <Image width="48" height="48" src={link} alt={name} title={name} />
        </div>
      </IconFadeOutHover>
    );
  }

  function MySelf() {
    const control = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.5,
    });

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } if (!inView) {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <div ref={ref} className="m-5">
        <SectionTitle title="Me, MySelf & I"><CgUserlane /></SectionTitle>
        <motion.div
          initial={"hidden"} animate={control} variants={secPopOut}
          className="ml-4 p-2 shadow-2xl bg-black bg-opacity-20 backdrop-blur-md rounded">
          <h3 className="text-[#f8b34b]">Hello! I'm Jeel</h3>
          <ul className="ml-4 text-md list-disc marker:text-[#f8b34b]">
            <li>I like to communicate with others because it give me chance to interact with others and also i learn something new with people, so it's help me improve my self.</li>
            <li>Enthusiastically explore new technologies for efficiency, always looking for ways to solve the problem as efficiently as possible</li>
          </ul>
        </motion.div>
      </div>
    );
  };

  function Education() {
    const control2 = useAnimation();
    const [ref2, inView2] = useInView({
      threshold: 0.5,
    });

    useEffect(() => {
      if (inView2) {
        control2.start("visible");
      } if (!inView2) {
        control2.start("hidden");
      }
    }, [control2, inView2]);

    return (
      <div ref={ref2} className="m-5">
        <SectionTitle title="Education"><IoMdSchool /></SectionTitle>
        <motion.div
          initial={"hidden"} animate={control2} variants={secPopOut}
          className="ml-4 p-2 shadow-2xl bg-black bg-opacity-20 backdrop-blur-md rounded">
          <ul className="ml-4 text-md list-disc marker:text-[#f8b34b]">
            <li className="list-none p-1">
              <div className="text-[#f8b34b]">
                Bechelor's Degree
              </div>
              <span className="font-mono rounded text-gray-400 text-md bg-white bg-opacity-10">2020 - Continue</span>
              <ul className="ml-4 text-md list-disc marker:text-[#f8b34b]">
                <li className="italic">The Gujarat Technological University</li>
                <li>Currently I'm pursuing bachelor's degree in Computer Engineering from L.D. College Of Engineering, i'm constantly moving forward in this field</li>
              </ul>
            </li>
            <li className="list-none p-1">
              <div className="text-[#f8b34b]">
                High School
              </div>
              <span className="font-mono rounded text-gray-400 text-md bg-white bg-opacity-10">2018 - 2020</span>
              <ul className="ml-4 text-md list-disc marker:text-[#f8b34b]">
                <li className="italic">The School Of Science , Rajkot</li>
                <li>I've completed my Science Subjects study with A1 grade Specially , Maths and Computer subject help me lot to get interest in this Marvelous field.</li>
              </ul>
            </li>
          </ul>
        </motion.div>
      </div>
    );
  };

  function Experience() {
    const control3 = useAnimation();
    const [ref3, inView3] = useInView({
      threshold: 0.5,
    });

    useEffect(() => {
      if (inView3) {
        control3.start("visible");
      } if (!inView3) {
        control3.start("hidden");
      }
    }, [control3, inView3]);

    return (
      <div ref={ref3} className="m-5">
        <SectionTitle title="Experience"><FaUserTie /></SectionTitle>
        <motion.div
          initial={"hidden"} animate={control3} variants={secPopOut}
          className="ml-4 p-2 shadow-2xl bg-black bg-opacity-20 backdrop-blur-md rounded">
          <ul className="ml-4 text-md list-disc marker:text-[#f8b34b]">
            <li>
              I'm a student at L.D. College Of Engineering and pursuing computer engineering course, I have a good knowdlage of this field also I'm good in mathematics & management.
            </li>
            <li>Currently i'm in 3<sup>rd</sup> year of graduation, i just started exploring into this field but i have a little bit experience of competitive programming.</li>
            <li>Nowdays, i recently completed FullStack web devlopment, now i'm learning python & java and other programming languages.</li>
          </ul>
        </motion.div>
      </div>
    );
  };

  function MySkills() {
    const control4 = useAnimation();
    const [ref4, inView4] = useInView({
      threshold: 0.5,
    });

    useEffect(() => {
      if (inView4) {
        control4.start("visible");
      } if (!inView4) {
        control4.start("hidden");
      }
    }, [control4, inView4]);

    return (
      <div ref={ref4} className="m-5">
        <SectionTitle title="Skills"><MdEngineering /></SectionTitle>
        <motion.div
          initial={"hidden"} animate={control4} variants={secPopOut}
          className="ml-4 p-2 shadow-2xl bg-black bg-opacity-20 backdrop-blur-md rounded">
          <ul className="ml-4 text-md list-none">
            <li>
              <span className="text-[#f8b34b] mb-2">Programing Languages</span>
              <div className="flex m-1">
                <SkillImg link="/skills/prolan/clan.svg" name="C" />
                <SkillImg link="/skills/prolan/cpp.svg" name="C++" />
                <SkillImg link="/skills/prolan/python.svg" name="Python" />
                <SkillImg link="/skills/prolan/java.svg" name="Java" />
              </div>
            </li>
            <li>
              <span className="text-[#f8b34b] mb-2">Technologies</span>
              <div className="m-1 grid grid-cols-4 sm:grid-cols-7 md:flex">
                <SkillImg link="/skills/tech/html.svg" name="HTML" />
                <SkillImg link="/skills/tech/css.svg" name="CSS" />
                <SkillImg link="/skills/tech/tailwind.svg" name="Tailwind CSS" />
                <SkillImg link="/skills/tech/bootstrap.svg" name="Bootstrap" />
                <SkillImg link="/skills/tech/js.svg" name="Java Script" />
                <SkillImg link="/skills/tech/react.svg" name="React" />
                <SkillImg link="/skills/tech/nextjs.svg" name="NextJS" />
                <SkillImg link="/skills/tech/nodejs.svg" name="Node" />
                <SkillImg link="/skills/tech/mongodb.png" name="MongoDB" />
              </div>
            </li>
            <li>
              <span className="text-[#f8b34b] mb-2">Devlopment</span>
              <div className="flex m-1">
                <SkillImg link="/skills/dev/git.svg" name="Git" />
                <SkillImg link="/skills/dev/github.svg" name="Github" />
                <SkillImg link="/skills/dev/vscode.svg" name="Visual Studio" />
                <SkillImg link="/skills/dev/linux.png" name="Linux" />
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    );
  };

  return (
    <Layout section="About Me" title="Jeel Gajera | About 😌" >
      <div className="flex-col items-center justify-center">
        {/* Me, My & I */}
        <MySelf />
        {/* Education */}
        <Education />
        {/* Experience */}
        <Experience />
        {/* Skills */}
        <MySkills />
      </div>
    </Layout >
  )
}

export default about;