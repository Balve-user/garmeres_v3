import { defineType } from "sanity";

export default defineType({
	name: "membership-registration",
	title: "Memberhsip registration",
	type: "document",
	preview: {
		prepare: () => ({
			title: "Membership registration",
		}),
	},
	fields: [
		{
			name: "iframeSrc",
			title: "iframe src URL",
			description: "Src URL of the iframe to be embedded on the website.",
			type: "url",
			validation: (rule) => rule.required(),
		},
		{
			name: "termsAndConditions",
			title: "Terms and conditions",
			type: "object",
			validation: (rule) => rule.required(),
			fields: [
				{
					name: "title",
					title: "Title",
					type: "string",
					validation: (rule) => rule.required(),
				},
				{
					name: "body",
					title: "Body",
					type: "array",
					of: [
						{
							type: "block",
						},
					],
					validation: (rule) => rule.required(),
				},
			],
		},
	],
});
