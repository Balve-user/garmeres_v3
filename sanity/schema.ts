import { type SchemaTypeDefinition } from "sanity";
import portableText from "./schemas/portable-text";
import portableImage from "./schemas/blocks/portable-image";
import blogPost from "./schemas/documents/blog-post";
import page from "./schemaTypes/documents/page";
import contact from "./schemas/documents/contact";
import featured from "./schemas/fields/featured";
import callToAction from "./schemas/fields/call-to-action";
import blogBrowser from "./schemas/blocks/blog-browser";
import eventsBrowser from "./schemas/blocks/events-browser";
import seo from "./schemas/documents/seo";
import registrationForm from "./schemas/blocks/membership-registration-form";
import accordion from "./schemas/blocks/accordion";
import person from "./schemas/documents/person";
import membershipForm from "./schemas/documents/membership-registration";
import reusableImage from "./schemas/documents/reusable-image";
import bankInformation from "./schemas/documents/contact/bank-information";
import organisationInformation from "./schemas/documents/contact/organisation-information";
import contactInformation from "./schemas/documents/contact/contact-information";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		portableText,
		portableImage,
		blogPost,
		page,
		contact,
		featured,
		callToAction,
		blogBrowser,
		eventsBrowser,
		seo,
		registrationForm,
		accordion,
		person,
		membershipForm,
		reusableImage,
		bankInformation,
		organisationInformation,
		contactInformation,
	],
};
