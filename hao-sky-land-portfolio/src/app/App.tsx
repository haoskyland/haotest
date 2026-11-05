import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Hero } from "../sections/Hero";
import { Intro } from "../sections/Intro";
import { Journey } from "../sections/Journey";
import { RealEstate } from "../sections/RealEstate";
import { CreativeStudio } from "../sections/CreativeStudio";
import { AiLab } from "../sections/AiLab";
import { Contact } from "../sections/Contact";
import { useLanguage } from "../hooks/useLanguage";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function App() {
  const { language, toggleLanguage, t } = useLanguage();
  useSmoothScroll();
  useScrollReveal();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <Navigation language={language} toggleLanguage={toggleLanguage} t={t}/>
      <main>
        <Hero t={t} language={language}/>
        <Intro t={t}/>
        <Journey t={t}/>
        <RealEstate t={t}/>
        <CreativeStudio t={t}/>
        <AiLab t={t}/>
        <Contact t={t}/>
      </main>
      <Footer t={t}/>
    </>
  );
}