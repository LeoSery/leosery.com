import { useRouter } from "next/router";
import ProjectTemplate from "../../components/Projects/ProjectTemplate";
import { projectsData } from "../../components/Projects/ProjectsData";
import SEO from '../../components/Common/SEO';

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Fonction pour trouver le projet correspondant au slug
  const findProject = (slug) => {
    // Convertir le slug en URL format (/projects/project-name)
    const projectUrl = `/projects/${slug}`;
    return projectsData.find(project => project.Url === projectUrl);
  };

  // Si la page est en cours de chargement
  if (!slug) {
    return <div>Loading...</div>;
  }

  // Trouver le projet correspondant
  const project = findProject(slug);

  // Si le projet n'existe pas, rediriger vers la page projets
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
        description={project.Description.slice(0, 155)} // On limite à ~155 caractères
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

// Cette fonction est optionnelle mais recommandée pour la SEO
export async function getStaticPaths() {
  // Générer tous les chemins possibles à partir de ProjectsData
  const paths = projectsData.map(project => ({
    params: { 
      // Extraire le slug de l'URL (ex: de "/Projects/poladroid" à "poladroid")
      slug: project.Url.split('/').pop() 
    }
  }));

  return {
    paths,
    fallback: false // Renvoie 404 si le slug n'existe pas
  };
}

// Cette fonction est obligatoire avec getStaticPaths
export async function getStaticProps({ params }) {
  return {
    props: {} // Sera fusionné avec les props de la page
  };
}