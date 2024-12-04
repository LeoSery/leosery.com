import { useEffect } from 'react';
import Head from 'next/head';
import Main from "../components/Projects/Main";

export default function Projects() {
  // Update page title when filters change
  useEffect(() => {
    document.title = "Leo Séry - Projects";
  }, []);

  return (
    <>
      <Head>
        <title>Leo Séry - Projects</title>
        <meta name="description" content="Explore my game development projects portfolio, from game engines to complete games. Featuring Unity3D, Unreal Engine, and more." />
        <meta name="keywords" content="game development, Unity3D, Unreal Engine, portfolio, game programming, C#, C++" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Leo Séry - Game Development Projects" />
        <meta property="og:description" content="Portfolio of game development projects including engines, complete games, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/projects/DefaultImg.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leo Séry - Game Development Projects" />
        <meta name="twitter:description" content="Portfolio of game development projects including engines, complete games, and more." />
        <meta name="twitter:image" content="/static/projects/DefaultImg.png" />
      </Head>

      <div className="relative min-h-screen">
        <main aria-label="Projects page content">
          <Main />
        </main>
      </div>
    </>
  );
}