import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { PAGE_QUERYResult } from "@/sanity.types";

export default function Page({ post }: { post: PAGE_QUERYResult }) {
	const { title, body } = post || {};

	return (
		<main className="container mx-auto prose prose-lg p-4">
			{title ? <h1>{title}</h1> : null}
			{body ? <PortableText value={body} /> : null}
			<hr />
			<Link href="/">&larr; Return home</Link>
		</main>
	);
}
