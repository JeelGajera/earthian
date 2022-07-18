import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../layout/Layout';
import ProjectCard from '../../../components/portfolio/ProjectCard';
import Domain from '../../../SiteData/ProjectData/Domain';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function Projects({ domain }) {

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

    const Div = ({ children, key }) => {
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

    const { title, projects } = domain;
    const { query } = useRouter();

    return (
        <Layout section="Portfolio 🪄" title={"Jeel Gajera | " + title + " 🪄"}>
            <div className="mt-4 grid grid-cols-6 gap-4">
                {projects.map((item) => (
                    <Div key={item.slug}>
                        <ProjectCard link={`/portfolio/${query.domain}/${encodeURIComponent(item.slug)}`} project={item} />
                    </Div>
                )
                )}
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const paths = Domain.map((domain) => (
        { params: { domain: domain.slug } }
    ));
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const domain = Domain.filter((domain) => domain.slug === params.domain);
    return {
        props: {
            domain: domain[0]
        }
    };
};

export default Projects;