import React, { useEffect, useRef } from 'react';
import Layout from '../../layout/Layout';
import ProjectCard from '../../components/portfolio/ProjectCard';
import Project from '../../SiteData/Projects';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function Projects() {

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

  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } if (!inView) {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <Layout section="Portfolio" title="Jeel Gajera | Portfolio 😎">
      <div className="mt-4 grid grid-cols-6 gap-4">
        {Project.map((item) => (
          <motion.div
            ref={ref} initial="hidden" animate={control} variants={secPopOut}
            key={item.slug} className="col-span-6 lg:col-span-2">
            <ProjectCard href={`/portfolio/${encodeURIComponent(item.slug)}`} project={item} />
          </motion.div>
        )
        )}
      </div>
    </Layout>
  )
}

export default Projects;