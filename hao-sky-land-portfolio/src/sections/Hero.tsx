import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ParticleField } from "../graphics/ParticleField";
import type { Language } from "../types";

interface Props { t: (key: any) => string; language: Language; }
export function Hero({ t, language }: Props) {
  return (
    <section className="hero section-dark" id="top">
      <div className="hero-grid" />
      <ParticleField />
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-content">
        <div className="eyebrow"><span className="label-dot" />{t("eyebrow")}</div>
        <h1 className="hero-title">
          <span>{t("heroLine1")}</span>
          <span className="outline">{t("heroLine2")}</span>
          <span>{t("heroLine3")}</span>
          <span className="gold-text">{t("heroLine4")}</span>
        </h1>
        <p className="hero-description">{t("heroDescription")}</p>
        <a href="#journey" className="text-link">{t("explore")} <ArrowUpRight size={16} /></a>
      </div>
      <div className="hero-side-note">
        <span>REAL ESTATE</span><i /> <span>CREATIVE</span><i /> <span>TECHNOLOGY</span>
      </div>
      <div className="hero-bottom">
        <span>HỒ CHÍ MINH CITY · VIETNAM</span>
        <a href="#intro"><ArrowDown size={15} /> {t("scroll")}</a>
        <span>01 — 06</span>
      </div>
      <div className="hero-portrait-frame">
        <img src={`${import.meta.env.BASE_URL}images/portrait-placeholder.svg`} alt={language === "vi" ? "Vị trí ảnh chân dung Hào Sky Land" : "Hào Sky Land portrait placeholder"} />
        <div className="portrait-caption"><span>HAO SKY LAND</span><small>PERSONAL BRAND / 2026</small></div>
      </div>
    </section>
  );
}