import { ArrowUpRight, Mail } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";
import { profile } from "../data/profile";

export function Contact({ t }: { t: (key: any) => string }) {
  return (
    <section className="contact section-dark" id="contact">
      <div className="contact-glow"/>
      <SectionLabel>{t("contactLabel")}</SectionLabel>
      <h2>{t("contactTitle")}</h2>
      <p>{t("contactBody")}</p>
      {profile.email ? (
        <a className="contact-button" href={`mailto:${profile.email}`}><Mail size={17}/>{t("contactCta")}<ArrowUpRight size={18}/></a>
      ) : (
        <span className="contact-pending">CONTACT DETAILS WILL BE ADDED BEFORE LAUNCH</span>
      )}
      <div className="contact-bottom"><span>{profile.location.toUpperCase()}</span><span>HÀO SKY LAND © 2026</span></div>
    </section>
  );
}
