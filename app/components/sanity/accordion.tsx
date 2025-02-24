import { ReactNode } from "react";

export default function Accordion({
  summary,
  children,
}: {
  summary: string | ReactNode;
  children: ReactNode | ReactNode[] | string;
}) {
  return (
    <details className="flex flex-col gap-4 mt-4 mb-2">
      <summary className="text-base font-medium">{summary}</summary>
      <div className="prose mx-1 [&>p]:text-sm [&>p]:font-normal">
        {children}
      </div>
    </details>
  );
}
