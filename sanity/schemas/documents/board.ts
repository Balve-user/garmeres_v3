import { rule } from "postcss";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "board",
	title: "Garmeres board",
	type: "document",
	preview: {
		prepare: () => ({
			title: "Board members",
		}),
	},
	fields: [
		defineField({
			name: "members",
			title: "Board members",
			type: "array",
			of: [
				{
					type: "reference",
					to: {
						type: "person",
					},
				},
			],
			validation: (rule) => rule.unique(),
		}),
	],
});
