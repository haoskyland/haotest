import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Language } from "../types";

interface Props {
  language: Language;
  toggleLanguage: () => void;
  t: (key: any) => string;
}

export function Navigation({ language, toggleLanguage, t }: Props) {
  const [open, setOpen] = useState(false);
  const links = [
    ["#journey", t("navJourney")],
    ["#real-estate", t("navRealEstate")],
    ["#creative", t("navCreative")],
    ["#ai-lab", t("navLab")],
    ["#contact", t("navContact")],
  ];
  return (
    <header className="site-nav">
      <a className="brand-mark" href="#top" aria-label="Hào Sky Land home">
        <span className="brand-symbol">H<span>.</span></span>
        <span className="brand-name">HÀO SKY LAND<small>PERSONAL BRAND</small></span>
      </a>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="language-toggle" onClick={toggleLanguage} aria-label="Switch language">{language === "vi" ? "EN" : "VI"}</button>
        <a className="nav-contact" href="#contact">LET'S TALK <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}