import { defineField, defineType } from "sanity";

export default defineType({
	name: "person",
	type: "object",
	title: "Person",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			options: {
				documentInternationalization: { exclude: true },
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "email",
			title: "E-mail",
			type: "string",
			options: {
				documentInternationalization: { exclude: true },
			},
			validation: (rule) => rule.email(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "portable-text",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "portable-image",
			options: {
				documentInternationalization: { exclude: true },
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "language",
			type: "string",
			readOnly: true,
			hidden: true,
		}),
	],
});
