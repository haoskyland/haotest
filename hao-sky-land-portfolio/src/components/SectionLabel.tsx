import type { ReactNode } from "react";
interface Props { children: ReactNode; }
export function SectionLabel({ children }: Props) {
  return <div className="section-label"><span className="label-dot" />{children}</div>;
}
