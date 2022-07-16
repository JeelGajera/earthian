import React from 'react';
import ProjectLayout from '../../layout/ProjectLayout';
import Project from '../../SiteData/Projects';

function ProjectPage({ project }) {
  return (
    <ProjectLayout project={project}/>
  )
}

export async function getStaticPaths() {
  const paths = Project.map(item => ({
    params: { project: item.slug },
  }));
  return {
    paths: paths.flat(),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const project = Project.find((item) => item.slug === params.project);

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;