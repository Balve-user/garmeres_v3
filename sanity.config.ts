import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { documentInternationalization } from "@sanity/document-internationalization";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import structure from "./sanity/desk/structure";
import { translatedTypes, singletonTypes } from "./sanity/desk/definition";
import { defaultLanguage, languageNames, languages } from "./types/language";
import { defineDocuments, presentationTool } from "sanity/presentation";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
	basePath: "/admin",
	projectId,
	dataset,
	schema: {
		...schema,

		templates: (templates) =>
			templates
				.filter(({ schemaType }) => !singletonTypes.has(schemaType))
				.filter(({ id }) => !translatedTypes.includes(id))
				.filter(({ id }) => {
					for (let i = 0; i < languages.length; i++) {
						const language = languages[i];
						for (let k = 0; k < translatedTypes.length; k++) {
							const schemaType = translatedTypes[k];
							if (
								language !== defaultLanguage &&
								id === `${schemaType}-${language}`
							)
								return false;
						}
					}
					return true;
				}),
	},
	plugins: [
		structureTool({
			structure,
			defaultDocumentNode: (S) => S.document(),
		}),
		visionTool({ defaultApiVersion: apiVersion }),
		documentInternationalization({
			supportedLanguages: languages.map((language) => {
				return {
					id: language,
					title: languageNames[language],
				};
			}),
			schemaTypes: translatedTypes,
			apiVersion,
		}),
		internationalizedArray({
			languages: languages.map((language) => {
				return {
					id: language,
					title: languageNames[language],
				};
			}),
			fieldTypes: ["string", "text"],
		}),
		presentationTool({
			resolve: {
				mainDocuments: defineDocuments([
					{
						route: "/:slug",
						filter: `_type == "post" && slug.current == $slug`,
					},
				]),
			},
			previewUrl: {
				previewMode: {
					enable: "/api/draft-mode/enable",
					disable: "/api/draft-mode/disable",
				},
			},
		}),
	],
	document: {
		actions: (input, context) => {
			return singletonTypes.has(context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input;
		},
		newDocumentOptions: (prev, { creationContext }) => {
			const { type } = creationContext;
			if (type === "global") {
				return [];
			}
			return prev;
		},
	},
	redirects: () => {
		return [
			{
				source: "/",
				destination: "/se",
				permanent: true,
			},
		];
	},
});
