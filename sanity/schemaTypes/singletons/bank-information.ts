import { IBAN, SWIFT } from "@/types/regex";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "bank-information",
	type: "document",
	title: "Bank information",
	preview: {
		prepare: () => ({
			title: "Bank information",
		}),
	},
	options: {
		columns: 2,
	} as any,
	fields: [
		defineField({
			name: "vipps",
			title: "Vipps number",
			type: "string",
			validation: (rule) =>
				rule
					.required()
					.length(6)
					.custom((value: string | undefined | {}) => {
						if (value && typeof value === "string" && /^[0-9]*$/.test(value))
							return true;
						return "Vipps number can only contain digits";
					}),
		}),
		defineField({
			name: "bankAccount",
			title: "Bank account number",
			type: "string",
			validation: (rule) =>
				rule
					.required()
					.length(11)
					.custom((value: string | undefined | {}) => {
						if (value && typeof value === "string" && /^[0-9]*$/.test(value))
							return true;
						return "Account number can only contain digits";
					}),
		}),
		defineField({
			name: "iban",
			title: "IBAN",
			type: "string",
			validation: (rule) =>
				rule.required().custom((value: string | undefined | {}) => {
					if (value && typeof value === "string" && IBAN.test(value))
						return true;
					return "Invalid IBAN";
				}),
		}),
		defineField({
			name: "swift",
			title: "SWIFT",
			type: "string",
			validation: (rule) =>
				rule.required().custom((value: string | undefined | {}) => {
					if (value && typeof value === "string" && SWIFT.test(value))
						return true;
					return "Invalid SWIFT";
				}),
		}),
	],
});
