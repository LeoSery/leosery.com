import { useEffect } from 'react';
import Main from "../components/Projects/Main";
import SEO from '../components/Common/SEO';

export default function Projects() {
  useEffect(() => {
    document.title = "Léo Séry - Projects";
  }, []);

  return (
    <>
      <SEO
        title="Projects"
        description="Browse Léo Séry's portfolio of C++, game engine and XR projects, from a Vulkan renderer to complete games built with Unity3D and Unreal Engine."
        keywords="Game Development Projects, Unity Games, Unreal Engine Projects, Game Programming Portfolio, C++, C#"
        ogImage="/assets/images/Common/DefaultMediaImage.png"
      />
      <div className="relative min-h-screen">
        <main aria-label="Projects page content">
          <Main />
        </main>
      </div>
    </>
  );
}