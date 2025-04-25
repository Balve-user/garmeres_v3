import { ReactNode } from "react";

export default async function Scrollable({
	children,
}: {
	children: ReactNode | ReactNode[];
}) {
	return (
		<div className="scrollable-prose overflow-y-scroll max-h-72 bg-slate-100 px-4 py-6 rounded-sm">
			{children}
		</div>
	);
}
