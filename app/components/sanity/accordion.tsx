import { ReactNode } from "react";

export default function Accordion({
  summary,
  children,
}: {
  summary: string | ReactNode;
  children: ReactNode | ReactNode[] | string;
}) {
  return (
    <details>
      <summary>{summary}</summary>
      {children}
    </details>
  );
}
