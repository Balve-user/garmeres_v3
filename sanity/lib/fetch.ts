import "server-only";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";

import { client } from "./client";
import { SanityTag } from "@/types/sanity-types";

export const token = process.env.SANITY_API_READ_TOKEN;

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = ["*"] as SanityTag[];

export async function sanityFetch<QueryResponse>({
	query,
	params = DEFAULT_PARAMS,
	tags = DEFAULT_TAGS,
}: {
	query: string;
	params?: QueryParams;
	tags?: string[];
}): Promise<QueryResponse> {
	const isDraftMode = (await draftMode()).isEnabled;
	if (isDraftMode && !token) {
		throw new Error(
			"The `SANITY_API_READ_TOKEN` environment variable is required."
		);
	}

	return client.fetch<QueryResponse>(query, params, {
		...(isDraftMode && {
			token: token,
			perspective: "previewDrafts",
		}),
		next: {
			revalidate: isDraftMode ? 0 : 3600,
			tags,
		},
	});
}
