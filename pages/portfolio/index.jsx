import React, { useEffect } from 'react';
import Layout from '../../layout/Layout';
import Domains from '../../SiteData/ProjectData/Domain.js';
import ProjectDomainCard from '../../components/portfolio/ProjectDomainCard';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function DomainPage() {

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

  const Divd = ({ children, key }) => {
    const control = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.2,
    });
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } if (!inView) {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <motion.div
        ref={ref} initial="hidden" animate={control} variants={secPopOut}
        key={key} className="col-span-6 lg:col-span-2">
        {children}
      </motion.div>
    );
  };

  return (
    <Layout section="Portfolio" title="Jeel Gajera | Portfolio 😎">
      <div className="mt-4 grid grid-cols-4 gap-4">
        {Domains.map((item) => (
          <Divd key={item.slug}>
            <ProjectDomainCard link={`/portfolio/${encodeURIComponent(item.slug)}`} project={item} />
          </Divd>
        )
        )}
      </div>
    </Layout>
  )
}

export default DomainPage;