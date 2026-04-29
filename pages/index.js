import MainSkills from "../components/Home/MainSkills";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import About from "../components/Home/About";
import Main from "../components/Home/Main";
import SEO from '../components/Common/SEO';
export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Portfolio of Léo Séry, Junior C++ Developer specializing in Engine & Tools Programming. Projects in Unity3D, Unreal Engine, and low-level systems."
        keywords="C++ Developer, Engine Programming, Tools Development, C++, Game Programming, Unity3D, Unreal Engine, Low-level, Portfolio, Léo Séry"
        ogImage="/assets/images/Common/DefaultMediaImage.png"
      />
      <div className="relative">
        <Main />
        <FeaturedProjects />
        <About />
        <MainSkills />
      </div>
    </>
  );
}
