import { ArrowUpRight, BrainCircuit, Clapperboard, Search, Workflow } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";

const capabilities = [
  { icon: Search, id: "01", title: "RESEARCH AGENT", desc: "Nghiên cứu thị trường, dự án và thông tin báo chí." },
  { icon: BrainCircuit, id: "02", title: "CONTENT INTELLIGENCE", desc: "Chuyển hóa dữ liệu thành chiến lược nội dung." },
  { icon: Clapperboard, id: "03", title: "VIDEO PRODUCTION", desc: "Hỗ trợ quy trình dựng video bất động sản." },
  { icon: Workflow, id: "04", title: "AI AUTOMATION", desc: "Kết nối các tác vụ và luồng vận hành." },
];

export function AiLab({ t }: { t: (key: any) => string }) {
  return (
    <section className="ai-lab section-light" id="ai-lab">
      <div className="section-heading light-heading">
        <SectionLabel>{t("labLabel")}</SectionLabel>
        <h2>{t("labTitle")}</h2>
        <p>{t("labBody")}</p>
      </div>
      <div className="lab-layout">
        <div className="lab-orb">
          <div className="orb-ring ring-a"/><div className="orb-ring ring-b"/>
          <div className="orb-core"><span>HSL</span><small>AI OFFICE</small></div>
          <span className="orb-caption cap-a">RESEARCH</span><span className="orb-caption cap-b">CREATE</span><span className="orb-caption cap-c">AUTOMATE</span>
        </div>
        <div className="capability-list">
          {capabilities.map(({ icon: Icon, id, title, desc }) => (
            <article className="capability" key={id}>
              <span className="cap-id">{id}</span><Icon size={20}/><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={17}/>
            </article>
          ))}
        </div>
      </div>
      <div className="lab-footnote"><span>EXPERIMENTAL SYSTEMS</span><span>BUILT IN PROGRESS · NOT A FINISHED SAAS PRODUCT</span></div>
    </section>
  );
}