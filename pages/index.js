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
        description="Game Programming student portfolio of Léo Séry. Specializing in Unity3D, Unreal Engine, and game engine development. Discover my projects and experience in game development."
        keywords="Game Programming, Unity3D, Unreal Engine, C++, C#, Game Development, Portfolio, Léo Séry"
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
