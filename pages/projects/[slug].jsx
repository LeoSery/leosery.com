import { useRouter } from "next/router";
import ProjectTemplate from "../../components/Projects/ProjectTemplate";
import { projectsData } from "../../components/Projects/ProjectsData";
import SEO from '../../components/Common/SEO';

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const findProject = (slug) => {
    const projectUrl = `/projects/${slug}`;
    return projectsData.find(project => project.Url === projectUrl);
  };

  if (!slug) {
    return <div>Loading...</div>;
  }

  const project = findProject(slug);

  if (!project) {
    if (typeof window !== 'undefined') {
      router.push('/projects');
    }
    return <div>Project not found</div>;
  }

  return (
    <>
      <SEO
        title={project.Title}
        description={project.Description.slice(0, 155)}
        keywords={[
          ...project.Keywords,
          'Game Development',
          'Portfolio Project',
          project.Technologies.join(', ')
        ].join(', ')}
        ogImage={project.BannerImage}
        ogType="article"
      />
      <ProjectTemplate project={project} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = projectsData.map(project => ({
    params: { 
      slug: project.Url.split('/').pop() 
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {}
  };
}