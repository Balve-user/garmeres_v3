import {
	Divider,
	ListItem,
	ListItemBuilder,
	StructureBuilder,
	StructureResolver,
	StructureResolverContext,
} from "sanity/structure";
import { ListItemOptions } from "./structure/tools/list-item";

export type CustomListItem = (
	S: StructureBuilder
) => ListItemBuilder | ListItem | Divider;

export type DeskDefinition = DeskSchemaType | DeskGroup;

export type DeskSchemaType = {
	schemaType: string;
	type?: "schema";
} & ListItemOptions;

export type DeskGroup = {
	title: string;
	type: "group";
	items: (DeskDefinition | CustomListItem)[];
};
