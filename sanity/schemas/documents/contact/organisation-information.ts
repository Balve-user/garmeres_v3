import { IBAN, SWIFT } from "@/types/regex";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "organisation-information",
	type: "document",
	title: "Organisation information",
	preview: {
		prepare: () => ({
			title: "Organisation information",
		}),
	},
	fieldsets: [
		{
			name: "organisation",
			title: "Organisation",
			options: {
				columns: 2,
			},
		},
		{
			name: "contact",
			title: "Contact",
			options: {
				columns: 2,
				collapsible: true,
			},
		},
	],

	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			fieldset: "organisation",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "orgNumber",
			title: "Organisation number",
			type: "string",
			fieldset: "organisation",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "boardMembers",
			title: "Board members",
			type: "array",
			of: [
				{
					type: "reference",
					to: [
						{
							type: "person",
						},
					],
				},
			],
		}),
	],
});
