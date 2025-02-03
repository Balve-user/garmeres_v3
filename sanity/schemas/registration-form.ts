import { defineType } from "sanity";
import RegistrationFormPreview from "../components/registration-form/preview";

export default defineType({
  name: "registration-form",
  title: "Registration form",
  type: "object",
  components: {
    preview: RegistrationFormPreview,
  },
  fields: [
    {
      name: "src",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
});
