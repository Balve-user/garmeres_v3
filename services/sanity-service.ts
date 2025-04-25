import {
	documentsQuery,
	menuItemsQuery,
	query,
	translationQuery,
	translationsQuery,
} from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import { Language, toTranslated } from "@/types/language";
import { Translated } from "@/types/language";
import {
	BlogPostDocument,
	PageDocument,
	ResolvableLink,
	SiteMetadataDocument,
	TranslatedDocument,
	Document,
	SanityTag,
	MembershipRegistration,
} from "@/types/sanity-types";

const tag: SanityTag = "*";

export function resolveLink(link: ResolvableLink) {
	const { language, slug, _type } = link;
	return `/${language}${_type === "blog-post" ? "/blog" : ""}/${
		(slug.current as any).current || slug.current
	}`;
}

export async function getMenuItems({ language }: { language: Language }) {
	const documents = await client.fetch<PageDocument[]>(
		menuItemsQuery(language),
		{},
		{
			next: {
				revalidate: 3600,
				tags: [tag],
			},
		}
	);
	return documents.map((document) => {
		return {
			name: document.title,
			path: resolveLink({
				language,
				slug: {
					_type: "slug",
					current:
						typeof document.slug === "object"
							? document.slug.current
							: document.slug,
				},
				_type: document._type,
			}),
		};
	});
}

export async function getSiteMetadata({ language }: { language: Language }) {
	return client.fetch<SiteMetadataDocument>(
		query({
			schemaType: "seo",
			language,
			firstOnly: true,
		}),
		{},
		{
			next: {
				tags: [tag],
				revalidate: 3600,
			},
		}
	);
}
export async function getAllSiteMetadata() {
	return client.fetch<SiteMetadataDocument[]>(
		query({
			schemaType: "seo",
			fields: `
        "imageUrl": siteThumbnail.asset->url
      `,
		}),
		{},
		{
			next: {
				tags: [tag],
				revalidate: 3600,
			},
		}
	);
}

export async function getTranslatedDocument(
	_id: string
): Promise<Translated<Document>> {
	const data = await client.fetch<TranslatedDocument<Document>>(
		translationQuery(_id),
		{},
		{
			next: {
				tags: [tag],
				revalidate: 3600,
			},
		}
	);
	return toTranslated<Document>(
		data._translations.filter((item) => item != null)
	);
}

type BlogPostQueryOptions = {
	perPage?: number;
	page?: number;
	language?: Language;
};

function paginateArray<T>(
	array: T[],
	pageSize: number,
	pageNumber: number
): T[] {
	return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export async function getBlogPosts(options?: BlogPostQueryOptions) {
	const blogPosts = await client.fetch<BlogPostDocument[]>(
		query({
			schemaType: "blog-post",
			language: options?.language,
			sort: "_createdAt desc",
		}),
		{},
		{
			next: {
				tags: [tag],
				revalidate: 3600,
			},
		}
	);
	let hasMore = false;
	if (options?.perPage) {
		const maxPages = Math.ceil(blogPosts.length / options.perPage);
		hasMore = (options?.page || 1) < maxPages;
	}
	return {
		blogPosts: options?.perPage
			? paginateArray(blogPosts, options.perPage, options.page || 1)
			: blogPosts,
		hasMore,
	};
}

export function getTranslations<T extends PageDocument | BlogPostDocument>({
	schemaType,
	slug,
	language,
}: {
	schemaType: string;
	slug: string;
	language: Language;
}) {
	return client.fetch<TranslatedDocument<T>>(
		translationsQuery({
			schemaType,
			slug,
			language,
		}),
		{},
		{
			next: {
				tags: [tag],
				revalidate: 3600,
			},
		}
	);
}

export function getAllDocuments(): Promise<Document[]> {
	return client.fetch<Document[]>(
		documentsQuery,
		{},
		{
			next: {
				tags: [tag],
				revalidate: 3600,
			},
		}
	);
}

export async function getMembershipRegistration(): Promise<MembershipRegistration> {
	return client.fetch<MembershipRegistration>(
		query({
			schemaType: "membership-registration",
			firstOnly: true,
		}),
		{},
		{
			next: {
				revalidate: 3600,
				tags: [tag],
			},
		}
	);
}
