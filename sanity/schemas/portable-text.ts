import { defineType } from "sanity";

export default defineType({
	name: "portable-text",
	title: "Rich text",
	type: "array",
	of: [
		{
			type: "block",
		},
		{
			type: "portable-image",
		},
		{
			type: "blog-browser",
		},
		{
			type: "events-browser",
		},
		{
			type: "membership-registration-form",
		},
		{
			type: "accordion",
		},
	],
});
