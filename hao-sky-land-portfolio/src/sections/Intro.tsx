import { SectionLabel } from "../components/SectionLabel";
export function Intro({ t }: { t: (key: any) => string }) {
  return (
    <section className="intro section-light" id="intro">
      <div className="intro-index">HSL / 001</div>
      <div className="intro-main">
        <SectionLabel>{t("introLabel")}</SectionLabel>
        <h2 className="statement">{t("introTitle")}</h2>
        <p className="body-large">{t("introBody")}</p>
      </div>
      <div className="intro-stamp"><span>HSL</span><small>VALUE<br/>BEYOND<br/>PROPERTY</small></div>
    </section>
  );
}