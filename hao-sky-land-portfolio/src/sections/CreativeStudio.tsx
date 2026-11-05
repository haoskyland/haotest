import { ArrowUpRight, Play } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";
export function CreativeStudio({ t }: { t: (key: any) => string }) {
  return (
    <section className="creative section-dark" id="creative">
      <div className="section-heading">
        <SectionLabel>{t("creativeLabel")}</SectionLabel>
        <h2>{t("creativeTitle")}</h2>
        <p>{t("creativeBody")}</p>
      </div>
      <div className="creative-feature">
        <div className="creative-screen">
          <div className="screen-grid" />
          <div className="screen-word">FRAME<br/><em>THE VALUE.</em></div>
          <div className="screen-play"><Play fill="currentColor" size={18} /></div>
          <div className="screen-tag">HSL MOTION / VISUAL STORY</div>
        </div>
        <div className="creative-copy">
          <span className="mono">HÀO XÂY VIDEO AI / 001</span>
          <h3>Real estate,<br/><i>in motion.</i></h3>
          <p>Phát triển quy trình sản xuất video bất động sản với tư duy dựng phim, motion design và công cụ AI — hướng đến một workflow có thể mở rộng.</p>
          <a href="#ai-lab" className="text-link">EXPLORE THE LAB <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </section>
  );
}