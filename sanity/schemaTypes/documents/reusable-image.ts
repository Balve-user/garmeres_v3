import { defineField, defineType } from "sanity";

export default defineType({
	name: "reusable-image",
	title: "Image",
	type: "document",
	preview: {
		select: {
			media: "image",
			title: "name",
		},
	},
	fields: [
		defineField({
			name: "name",
			title: "Asset name",
			description:
				"Won't appear on the website - only used to label images internally so you can search recognize them later.",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			validation: (rule) => rule.required().assetRequired(),
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "alt",
			title: "Alternative text",
			description:
				"Describe what is shown in the image, so it can be read by visually impaired users.",
			type: "internationalizedArrayString",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "attribution",
			title: "Attribution",
			description: `E.g. "Photo by Hans Hansen"`,
			type: "internationalizedArrayString",
		}),
		defineField({
			name: "title",
			title: "Title",
			description:
				"Displayed when hovering the image with the mouse, or if the image fails to render.",
			type: "internationalizedArrayString",
		}),
		defineField({
			name: "caption",
			title: "Caption",
			description: "Will be displayed underneath the image.",
			type: "internationalizedArrayString",
		}),
	],
});
