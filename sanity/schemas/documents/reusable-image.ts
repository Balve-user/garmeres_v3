import { defineField, defineType } from "sanity";
import { apiVersion } from "@/sanity/env";

export default defineType({
	name: "reusable-image",
	title: "Image",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Asset name",
			type: "string",
			validation: (Rule) =>
				Rule.required().custom(async (value, context) => {
					if (!value) return true; // handled by required()

					const { document, getClient } = context;
					const client = getClient({ apiVersion });

					// Normalised ID without the drafts. prefix so we treat draft & published as the same doc
					const baseId = (document?._id || "").replace(/^drafts\./, "");

					// Exclude both the draft and the published versions of the *current* doc
					const params = {
						name: value,
						publishedId: baseId,
						draftId: `drafts.${baseId}`,
					};

					const query = `*[_type == "reusable-image" && name == $name && !(_id in [$publishedId, $draftId])][0]._id`;

					const duplicate = await client.fetch(query, params);
					return duplicate ? "Another image already has that name" : true;
				}),
		}),
		defineField({
			name: "image",
			title: "Image asset",
			type: "image",
			validation: (rule) => rule.assetRequired().required(),
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
