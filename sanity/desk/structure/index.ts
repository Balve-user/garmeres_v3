import {
	Divider,
	ListItem,
	ListItemBuilder,
	StructureBuilder,
} from "sanity/structure";
import { deskDefinition, itemIsDeskDefinition } from "../definition";
import { createFolder, createListItem, createViews } from "./tools";
import { DeskDefinition, CustomListItem } from "../types";
import {
	DeskBuildable,
	DeskContext,
	DeskGroupSpec,
	DeskPreviewSpec,
	DeskSchemaTypeSpec,
} from "./types";
import { apiVersion } from "@/sanity/env";
import { query } from "@/sanity/lib/query";
import { SanityDocument } from "next-sanity";
import { languageNames } from "@/types/language";
import { Iframe, IframeProps } from "sanity-plugin-iframe-pane";

export function toListItems(
	S: StructureBuilder,
	definitions: (DeskDefinition | CustomListItem)[]
): (ListItemBuilder | ListItem | Divider)[] {
	return definitions.map((definition: DeskDefinition | CustomListItem) => {
		if (itemIsDeskDefinition(definition)) {
			if (definition.type === "group")
				return createFolder(
					S,
					definition.title,
					toListItems(S, definition.items)
				);
			const { type, schemaType, ...options } = definition;
			return createListItem(S, schemaType, options);
		} else return definition(S);
	});
}

export default function structure(S: StructureBuilder) {
	const a = S.documentTypeListItems().filter(
		(value) => value.getSchemaType() === "person-group"
	);
	return S.list().title("Content").items(toListItems(S, deskDefinition));
}

export function defineGroup({ title, items }: DeskGroupSpec): DeskBuildable {
	return (deskContext: DeskContext) =>
		Promise.all(items.map((item) => item(deskContext))).then((resolvedItems) =>
			deskContext.builder
				.listItem()
				.title(title)
				.child(
					deskContext.builder.list().title(title).items(resolvedItems.flat())
				)
		);
}

export function defineSchemaType({
	title,
	schemaType,
	singleton,
}: DeskSchemaTypeSpec) {
	return (deskContext: DeskContext) => {
		return deskContext.builder
			.listItem()
			.id(schemaType)
			.title(title || schemaType)
			.child(
				singleton === true
					? deskContext.builder
							.document()
							.id(schemaType)
							.schemaType(schemaType)
							.documentId(schemaType)
					: deskContext.builder
							.document()
							.id(schemaType)
							.schemaType(schemaType)
							.documentId(schemaType)
			);
	};
}

export function definePreview({ id, language, previewPath }: DeskPreviewSpec) {
	return (deskContext: DeskContext) => {
		const previewId = `${id}-preview${language ? `-${language}` : ""}`;
		return deskContext.builder.view
			.component((props: IframeProps) => {
				return Iframe({
					document: props.document,
					options: {
						url: async (doc) => {
							if (typeof previewPath === "string") {
								return previewPath;
							} else if (typeof previewPath === "function" && doc != null) {
								return previewPath(doc, language);
							}
							return undefined;
						},
						key: previewId,
					},
				});
			})
			.id(previewId)
			.title(`Preview${language ? ` - ${languageNames[language]}` : ""}`);
	};
}
