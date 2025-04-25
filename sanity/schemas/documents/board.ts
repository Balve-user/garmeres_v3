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
			name: "enabled",
			title: "Enabled",
			type: "boolean",
			validation: (rule) => rule.required(),
			initialValue: true,
		}),
		defineField({
			name: "members",
			title: "Board members",
			type: "array",
			of: [
				{
					type: "person",
				},
			],
		}),
	],
});
