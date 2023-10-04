import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '../layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { TextDown, IconFadeOutHover, FadeOut } from '../components/utils/FrameMotion';
import { SiGotomeeting } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { FiGithub } from 'react-icons/fi';
import { GrTwitter } from 'react-icons/gr';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";


function Contact() {

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

  const SectionTitle = () => {
    return (
      <TextDown>
        <div className="mb-2 flex items-center text-xl sm:text-2xl z-0">
          <IconFadeOutHover>
            <div className="m-2 animate-spinSlow flex text-red-500 bg-teal-400 bg-opacity-10 rounded-full p-1">
              <SiGotomeeting />
            </div>
          </IconFadeOutHover>
          <h1 className=" text-gray-500">Get In Touch</h1>
        </div>
      </TextDown>
    );
  }

  const DynamicIcon = ({ children }) => {
    return (
      <div className="p-2 m-1 flex justify-center text-2xl hover:animate-waving-hand rounded-full text-red-500 hover:text-teal-400">
        <IconFadeOutHover>
          {children}
        </IconFadeOutHover>
      </div>
    );
  };

  const DarkDiv = ({ children, refn, ctr }) => {
    return (
      <motion.div ref={refn} initial={"hidden"} animate={ctr} variants={secPopOut}
        className="m-4 p-2 shadow-2xl md:w-full rounded-lg bg-black bg-opacity-20 backdrop-blur-md">
        {children}
      </motion.div>
    );
  };

  const SocialBtn = ({ children, to }) => {
    return (
      <IconFadeOutHover>
        <a target="_blank" rel="noopener noreferrer" href={to} className="p-2 bg-white bg-opacity-10 hover:bg-teal-400 hover:bg-opacity-10 hover:text-red-500 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:animate-pulse ">
          {children}
        </a>
      </IconFadeOutHover>
    )
  }

  const Email = () => {
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
      <DarkDiv refn={ref} ctr={control}>
        <div className="flex-col justify-center">
          <DynamicIcon><MdEmail /></DynamicIcon>
          <h1 className="flex item-center justify-center text-xl">Email</h1>
          <Link href="mailto:jeelgajera200@gmail.com" passHref target="_blank" rel="noopener noreferrer">
            <p className="flex item-center justify-center text-gray-500 p-1 cursor-pointer">jeelgajera200@gmail.com</p>
          </Link>
        </div>
      </DarkDiv>
    );
  };

  const SocialDiv = () => {
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
      <DarkDiv refn={ref2} ctr={control2}>
        <ul className="m-3 p-2 gap-3 text-3xl flex items-center justify-center">
          <SocialBtn to="https://github.com/JeelGajera"><FiGithub /></SocialBtn>
          <SocialBtn to="https://twitter.com/jeelgajera_"><GrTwitter /></SocialBtn>
          <SocialBtn to="https://www.linkedin.com/in/jeel-gajera-063970215"><FaLinkedinIn /></SocialBtn>
        </ul>
      </DarkDiv>
    );
  };

  const Location = () => {
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
      <DarkDiv refn={ref3} ctr={control3}>
        <div className="flex-col justify-center">
          <DynamicIcon><ImLocation2 /></DynamicIcon>
          <h1 className="flex item-center justify-center text-xl">Location</h1>
          <p className="flex item-center justify-center text-gray-500 p-1 cursor-pointer">Ahmedabad, India</p>
        </div>
      </DarkDiv>
    );
  };

  const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_rftyq0t', 'template_luj4ace', form.current, 'nYvFyb6DzPX05DTeI')
        .then((result) => {
          console.log(result.text);
          document.getElementById("statusText").innerHTML = ("Thank You 😊! for contacting me.");
        }, (error) => {
          console.log(error.text);
          document.getElementById("statusText").innerHTML = ("Ooops.. 😑! Please try again later.");
        });
      e.target.reset();
    };

    const control4 = useAnimation();
    const [ref4, inView4] = useInView({
      threshold: 0.2,
    });

    useEffect(() => {
      if (inView4) {
        control4.start("visible");
      } if (!inView4) {
        control4.start("hidden");
      }
    }, [control4, inView4]);

    return (
      <DarkDiv refn={ref4} ctr={control4}>
        <form ref={form} onSubmit={sendEmail}>
          <div
            className="max-w-screen-xl px-8 grid gap-2 grid-cols-1 md:grid-cols-2 py-4 mx-auto text-[#f8b34b] rounded-lg shadow-lg">
            <div className="flex flex-col justify-between">
              <div className="text-center animate-pulseSlow">
                <Image width="500" height="300" src="/contactForm.svg" alt="form-img" />
              </div>
              <FadeOut>
                <h2 id="statusText" className="md:z-10 md:p-12 lg:px-16 text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
              </FadeOut>
            </div>
            <div className="">
              <div>
                <span className="text-sm text-red-500 font-bold">Full Name</span>
                <input className="w-full bg-white bg-opacity-10 backdrop-blur-md text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" name="name" required />
              </div>
              <div className="mt-8">
                <span className="text-sm text-red-500 font-bold">Email</span>
                <input className="w-full bg-white bg-opacity-10 backdrop-blur-md text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email" name="email" required />
              </div>
              <div className="mt-8">
                <span className="text-sm text-red-500 font-bold">Message</span>
                <textarea required name="message"
                  className="w-full h-32 bg-white bg-opacity-10 backdrop-blur-md text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="mt-8">
                <button type="submit"
                  className="flex justify-center text-sm font-bold tracking-wide bg-red-500 bg-opacity-10 text-teal-400 p-3 rounded-full w-full transform active:translate-y-[4px] active:shadow-active">
                  Send Message <span className="text-red-500 text-xl animate-waving-hand"><RiSendPlaneFill /></span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </DarkDiv>
    );
  };

  return (
    <Layout section="Contact" title="Jeel Gajera | Contact 😊">
      <SectionTitle />
      <div className="md:flex items-center justify-center">
        <Email />
        <SocialDiv />
        <Location />
      </div>
      <Form />
    </Layout>
  )
}

export default Contact;