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
		prepare({ title, media }) {
			return {
				title,
				media,
			};
		},
	},
	fields: [
		defineField({
			name: "image",
			title: "Image",
			description: "(Optional)",
			type: "reference",
			to: [{ type: "reusable-image" }],
		}),
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "email",
			title: "E-mail",
			description: "(Optional)",
			type: "string",
			validation: (rule) => rule.email(),
		}),
		defineField({
			name: "role",
			title: "Role",
			description: "(Optional)",
			type: "internationalizedArrayString",
		}),
		defineField({
			name: "description",
			title: "Description",
			description: "(Optional)",
			type: "internationalizedArrayText",
		}),
	],
});
