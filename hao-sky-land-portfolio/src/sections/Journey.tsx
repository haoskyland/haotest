import { SectionLabel } from "../components/SectionLabel";
const steps = [
  ["01", "step1Title", "step1Body", "01"],
  ["02", "step2Title", "step2Body", "02"],
  ["03", "step3Title", "step3Body", "03"],
  ["04", "step4Title", "step4Body", "04"],
] as const;

export function Journey({ t }: { t: (key: any) => string }) {
  return (
    <section className="journey section-dark" id="journey">
      <div className="section-heading">
        <SectionLabel>{t("journeyLabel")}</SectionLabel>
        <h2>{t("journeyTitle")}</h2>
        <p>{t("journeyBody")}</p>
      </div>
      <div className="journey-track">
        <div className="track-line" />
        {steps.map(([number, title, body]) => (
          <article className="journey-step reveal" key={number}>
            <div className="step-number">{number}</div>
            <div className="step-node" />
            <h3>{t(title)}</h3>
            <p>{t(body)}</p>
          </article>
        ))}
      </div>
      <div className="journey-ghost">JOURNEY</div>
    </section>
  );
}