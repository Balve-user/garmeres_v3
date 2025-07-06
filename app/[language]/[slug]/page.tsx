import { PAGES_QUERY, PAGE_QUERY } from "@/sanity/lib/queries";
import { QueryParams } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERYResult, PAGES_QUERYResult } from "@/sanity.types";
import PageComponent from "@/components/sanity/Page";

export default async function Page({
	params,
}: {
	params: Promise<QueryParams>;
}) {
	const { data: document } = await sanityFetch({
		query: PAGE_QUERY,
		params: await params,
	});
	return <PageComponent post={} />;
}

export async function generateStaticParams() {
	return client.fetch<PAGES_QUERYResult>(PAGES_QUERY).then(
		(pages) =>
			pages
				.map((page) => {
					return {
						slug: page.slug?.current,
						language: page.language,
					};
				})
				.filter(
					(props) =>
						typeof props.slug === "string" && typeof props.language === "string"
				) as { slug: string; language: string }[]
	);
}
