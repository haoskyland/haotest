import { ArrowUp } from "lucide-react";
export function Footer({ t }: { t: (key: any) => string }) {
  return <footer className="site-footer"><span>{t("footer")}</span><a href="#top">BACK TO TOP <ArrowUp size={14}/></a><span>HSL / 2026</span></footer>;
}