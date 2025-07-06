import { StructureBuilder } from "sanity/structure";
import {
	CustomListItem,
	DeskDefinition,
	DeskGroup,
	DeskSchemaType,
} from "./types";

export const deskDefinition: (DeskDefinition | CustomListItem)[] = [
	{
		type: "group",
		title: "Garmeres information",
		items: [
			{
				schemaType: "organisation-information",
				title: "Organisation",
				singleton: true,
			},
			{
				schemaType: "contact-information",
				title: "Contact",
				singleton: true,
			},
			{
				schemaType: "bank-information",
				title: "Bank",
				singleton: true,
			},
		],
	},
	{
		schemaType: "person",
		title: "Persons",
		singleton: false,
		translated: false,
	},
	{
		schemaType: "page",
		title: "Pages",
		translated: true,
		singleton: false,
		preview: true,
		previewPath: (doc: any) => {
			return `${doc.language || ""}${
				doc.slug.current ? `/${doc.slug.current}` : ""
			}`;
		},
	},
	{
		schemaType: "blog-post",
		title: "Blog posts",
		translated: true,
		singleton: false,
		preview: true,
		previewPath: (doc: any) =>
			`${doc.language || ""}/blog${
				doc.slug.current ? `/${doc.slug.current}` : ""
			}`,
	},

	{
		type: "group",
		title: "Media",
		items: [
			{
				schemaType: "reusable-image",
				title: "Images",
				singleton: false,
				translated: false,
			},
		],
	},
	{
		type: "group",
		title: "Settings",
		items: [
			{
				schemaType: "contact",
				title: "Contact information",
				singleton: true,
			},
			{
				schemaType: "membership-registration",
				title: "Membership registration",
				singleton: true,
				translated: false,
			},
			{
				schemaType: "seo",
				title: "Site metadata",
				singleton: true,
				translated: true,
			},
		],
	},
];

export function itemIsDeskDefinition(
	item: DeskDefinition | CustomListItem
): item is DeskDefinition {
	return typeof item !== "function";
}

function definitionIsGroup(
	definition: DeskDefinition
): definition is DeskGroup {
	return definition.type === "group";
}

const getDeskSchemaTypes: (deskGroup: DeskGroup) => DeskSchemaType[] = (
	deskGroup: DeskGroup
) =>
	deskGroup.items
		.filter(itemIsDeskDefinition)
		.flatMap((item) =>
			definitionIsGroup(item) ? getDeskSchemaTypes(item) : item
		);

export const deskSchemaTypes: DeskSchemaType[] = deskDefinition
	.filter(itemIsDeskDefinition)
	.flatMap((definition) =>
		definitionIsGroup(definition) ? getDeskSchemaTypes(definition) : definition
	);

export const singletonTypes = new Set(
	deskSchemaTypes
		.filter((type) => type.singleton)
		.map((type) => type.schemaType)
);
export const translatedTypes = deskSchemaTypes
	.filter((type) => type.translated === true)
	.map((type) => type.schemaType);
