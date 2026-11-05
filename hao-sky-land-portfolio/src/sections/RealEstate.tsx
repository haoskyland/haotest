import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../components/SectionLabel";
import { projects } from "../data/projects";

export function RealEstate({ t }: { t: (key: any) => string }) {
  return (
    <section className="real-estate section-light" id="real-estate">
      <div className="section-heading light-heading">
        <SectionLabel>{t("realLabel")}</SectionLabel>
        <h2>{t("realTitle")}</h2>
        <p>{t("realBody")}</p>
      </div>
      <div className="project-grid">
        {projects.slice(0, 2).map((project) => (
          <article className={`project-card ${project.accent}`} key={project.number}>
            <div className="project-visual">
              <div className="building building-a" /><div className="building building-b" /><div className="building building-c" />
              <div className="visual-coordinate">10°49' N / 106°37' E</div>
            </div>
            <div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.status}</span></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#contact" aria-label={`Discuss ${project.title}`}><ArrowUpRight /></a>
          </article>
        ))}
      </div>
      <p className="disclaimer">* Nội dung dự án là góc nhìn nghiên cứu; thông tin quy hoạch, pháp lý, chính sách và giá bán cần được xác minh tại thời điểm công bố.</p>
    </section>
  );
}