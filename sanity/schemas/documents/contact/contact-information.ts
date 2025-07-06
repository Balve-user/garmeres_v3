import { defineField, defineType } from "sanity";
export default defineType({
	name: "contact-information",
	type: "document",
	title: "Contact information",
	preview: {
		prepare: () => ({
			title: "Contact information",
		}),
	},

	fields: [
		defineField({
			name: "email",
			title: "E-mail",
			type: "string",
			validation: (rule) => rule.required().email(),
		}),
		defineField({
			name: "phone",
			title: "Phone",
			description: "Optional",
			type: "string",
		}),
		defineField({
			name: "address",
			title: "Address",
			type: "object",
			options: {
				columns: 2,
			},
			validation: (rule) => rule.required(),
			fields: [
				defineField({
					name: "co",
					title: "C/O",
					description: "Optional",
					type: "string",
				}),
				defineField({
					name: "streetAddress",
					title: "Street name and number",
					type: "string",
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "zipCode",
					title: "Zip code",
					type: "string",
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "city",
					title: "City",
					type: "string",
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "country",
					title: "Country",
					type: "string",
				}),
			],
		}),
	],
});
