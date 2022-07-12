import React from 'react';
import Intro from '../components/Intro.jsx';
import Layout from '../layout/Layout.jsx';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LinkButton } from '../components/utils/Button';
import { BsArrowRight } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { GrTwitter } from 'react-icons/gr';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {

  const SocialBtn = ({ children, to }) => {
    return (
      <Link href={to} passHref>
        <motion.a
          whileHover={{ scale: 1.2, origin: 0 }}
          transition={{ type: 'spring', stiffness: 400 }}
          target="_blank" className="p-2 bg-white bg-opacity-10 hover:bg-teal-400 hover:bg-opacity-10 hover:text-red-500 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:animate-pulse ">
          {children}
        </motion.a>
      </Link>
    )
  }
  return (
    <>
      <Layout title="Jeel Gajera | Home 🧑‍💻">
        <div className="flex-col items-center justify-center">
          <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <Intro />
          </motion.div>
          <div className="flex item-center justify-center mt-3">
            <LinkButton type="dynamic" href="/contact">
              Connect with me <span className="px-2 text-teal-400 animate-pulse"><BsArrowRight /></span>
            </LinkButton>
          </div>
          <motion.ul
            initial="hidden" animate="visible" variants={{
              hidden: {
                opacity: 0,
                y: '100vh'
              },
              visible: {
                opacity: 1,
                y: 0
              }
            }}
            transition={{ delay: 0.5 }}
            className="mt-3 p-2 gap-3 text-3xl flex items-center justify-center">
            <SocialBtn to="https://github.com/JeelGajera"><FiGithub /></SocialBtn>
            <SocialBtn to="https://twitter.com/enisoter_jg"><GrTwitter /></SocialBtn>
            <SocialBtn to="https://www.linkedin.com/in/jeel-gajera-063970215"><FaLinkedinIn /></SocialBtn>
            <SocialBtn to="https://www.instagram.com/enisoter_jg"><RiInstagramFill /></SocialBtn>
            <SocialBtn to="https://www.facebook.com/enisoter_jg"><FaFacebookF /></SocialBtn>
          </motion.ul>
        </div>
      </Layout>
    </>
  )
}