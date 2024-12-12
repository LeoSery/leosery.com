import { useEffect } from 'react';
import Main from "../components/Projects/Main";
import SEO from '../components/Common/SEO';

export default function Projects() {
  // Update page title when filters change
  useEffect(() => {
    document.title = "Léo Séry - Projects";
  }, []);

  return (
    <>
      <SEO
        title="Projects"
        description="Browse through Léo Séry's game development portfolio. From game engines to complete games, discover projects built with Unity3D, Unreal Engine, and custom technologies."
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