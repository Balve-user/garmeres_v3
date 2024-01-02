import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { documentInternationalization } from "@sanity/document-internationalization";
import structure from "./sanity/desk/structure";
import { translatedTypes } from "./sanity/desk/definition";

export default defineConfig({
    basePath: "/admin",
    projectId,
    dataset,
    schema,
    plugins: [
        deskTool({
            structure,
        }),
        visionTool({ defaultApiVersion: apiVersion }),
        documentInternationalization({
            supportedLanguages: [
                { id: "en", title: "English" },
                { id: "se", title: "Davvisámegiella" },
            ],
            schemaTypes: translatedTypes,
        }),
    ],
});
