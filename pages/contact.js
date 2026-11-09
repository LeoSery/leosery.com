import Main from "../components/Contact/Main";
import SEO from '../components/Common/SEO';
import React from "react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Léo Séry for C++ and embedded software opportunities, game engine and tools programming, or project collaborations."
        keywords="Contact Léo Séry, Game Developer Contact, Unity Developer, Unreal Engine Developer, Game Programming"
        ogImage="/assets/images/Common/DefaultMediaImage.png"
      />
      <div className="relative">
        <Main />
      </div>
    </>
  );
}
