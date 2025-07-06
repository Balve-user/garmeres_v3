import { Language } from "@/types/language";
import { SanityDocument } from "sanity";
import {
	ListItemBuilder,
	ListItem,
	Divider,
	StructureBuilder,
	StructureResolverContext,
	ViewBuilder,
	View,
} from "sanity/structure";

export type DeskContext = {
	builder: StructureBuilder;
	resolver: StructureResolverContext;
};

export type DeskBuildable = (
	deskContext: DeskContext
) => Promise<
	| ListItemBuilder
	| ListItem
	| Divider
	| (ListItemBuilder | ListItem | Divider)[]
>;

export type DeskView = (deskContext: DeskContext) => View | ViewBuilder;

export type ListItemSpec = {
	title: string;
};

export type DeskPreviewPath =
	| ((doc: SanityDocument, language?: Language) => string)
	| string;

export type DeskGroupSpec = {
	title: string;
	items: DeskBuildable[];
};

export type DeskSchemaTypeSpec = {
	schemaType: string;
	title?: string;
	singleton?: boolean;
	translated?: boolean;
	previewPath?: DeskPreviewPath;
};

export type DeskViewSpec = {
	schemaType: string;
	translated?: boolean;
	previewPath?: DeskPreviewPath;
};

export type DeskPreviewSpec = {
	id: string;
	previewPath: DeskPreviewPath;
	language?: Language;
};
