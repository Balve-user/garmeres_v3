import MembershipRegistrationFormPreview from "@/sanity/components/membership-registration-form/preview";
import { defineType } from "sanity";

export default defineType({
	name: "membership-registration-form",
	title: "Membership registration form",
	type: "block",
	components: {
		block: MembershipRegistrationFormPreview,
	},
});
