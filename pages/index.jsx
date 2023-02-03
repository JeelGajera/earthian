import React from 'react';
import Intro from '../components/Intro.jsx';
import Layout from '../layout/Layout.jsx';
import { UpToDown, DownToUp, IconFadeOutHover, FadeOut } from '../components/utils/FrameMotion';
import { LinkButton } from '../components/utils/Button';
import { BsArrowRight } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Home() {

  const SocialBtn = ({ children, to }) => {
    return (
      <IconFadeOutHover>
        <a target="_blank" rel="noopener noreferrer" href={to} className="p-2 shadow-2xl bg-white bg-opacity-10 hover:bg-teal-400 hover:bg-opacity-10 hover:text-red-500 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:animate-pulse ">
          {children}
        </a>
      </IconFadeOutHover>
    )
  }
  return (
    <>
      <Layout title="Jeel Gajera | Home 🧑‍💻">
        <div className="flex-col items-center justify-center">
          <UpToDown>
            <Intro />
          </UpToDown>
          <div className="flex item-center justify-center mt-3">
            <FadeOut>
              <LinkButton type="dynamic" href="/contact">
                Connect with me <span className="px-2 text-teal-400 animate-pulse"><BsArrowRight /></span>
              </LinkButton>
            </FadeOut>
          </div>
          <DownToUp>
            <ul className="mt-3 p-2 gap-3 text-3xl flex items-center justify-center">
              <SocialBtn to="https://github.com/JeelGajera"><FiGithub /></SocialBtn>
              <SocialBtn to="https://twitter.com/_jeelgajera"><GrTwitter /></SocialBtn>
              <SocialBtn to="https://www.linkedin.com/in/jeel-gajera-063970215"><FaLinkedinIn /></SocialBtn>
            </ul>
          </DownToUp>
        </div>
      </Layout>
    </>
  )
};