import React from 'react';
import ProjectLayout from '../../../layout/ProjectLayout';
import Domain from '../../../SiteData/ProjectData/Domain';
import Project from '../../../SiteData/ProjectData/Projects';

function ProjectPage({ project }) {
  return (
    <ProjectLayout project={project}/>
  )
}

export async function getStaticPaths() {
  const paths = Domain.map((domain) =>
    domain.projects.map((project) => ({ 
      params: {
        project: project.slug,
        domain: domain.slug
      }
    })));
    return {
      paths: paths.flat(),
      fallback: false
    };
};

export const getStaticProps = async ({ params }) => {
  const project = Project[params.domain].find(project => project.slug === params.project);
  return { props: { project } };
};

export default ProjectPage;