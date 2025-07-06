import { defineField, defineType } from "sanity";

export default defineType({
	name: "person",
	type: "document",
	title: "Person",
	preview: {
		select: {
			title: "name",
			media: "image.image",
		},
	},
	fieldsets: [
		{
			name: "personal",
			title: "Personal information",
			options: {
				columns: 2,
			},
		},
	],
	fields: [
		defineField({
			name: "image",
			title: "Image",
			type: "reference",
			to: [
				{
					type: "reusable-image",
				},
			],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required(),
			fieldset: "personal",
		}),
		defineField({
			name: "email",
			title: "E-mail",
			description: "Optional",
			type: "string",
			validation: (rule) => rule.email(),
			fieldset: "personal",
		}),
		defineField({
			name: "title",
			title: "Title",
			description: "Optional",
			type: "internationalizedArrayString",
			fieldset: "personal",
		}),
		defineField({
			name: "pronouns",
			title: "Pronouns",
			description: "Optional",
			type: "internationalizedArrayString",
			fieldset: "personal",
		}),
		defineField({
			name: "description",
			title: "Description",
			description: "Optional",
			type: "internationalizedArrayText",
		}),
	],
});
