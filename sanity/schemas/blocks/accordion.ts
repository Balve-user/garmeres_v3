import { defineType } from "sanity";
import AccordionPreview from "../../components/accordion/preview";

export default defineType({
	name: "accordion",
	title: "Accordion",
	type: "object",
	components: {
		preview: AccordionPreview,
	},
	fields: [
		{
			name: "summary",
			type: "string",
			validation: (rule) => rule.required(),
		},
		{
			name: "text",
			type: "array",
			of: [
				{
					type: "block",
				},
			],
		},
	],
});
