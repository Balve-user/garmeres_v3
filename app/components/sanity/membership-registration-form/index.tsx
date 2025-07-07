import { getMembershipRegistration } from "@/services/sanity-service";
import RegistrationFormTermsAndConditions from "./registration-form-terms-and-conditions";
import RegistrationFormInteractive from "./registration-form-interactive";

export default async function MembershipRegistrationForm({
	title,
}: {
	title: string;
}) {
	const props = await getMembershipRegistration();
	return (
		<div>
			<section lang="no" className="my-4" aria-label={title}>
				<RegistrationFormTermsAndConditions {...props.termsAndConditions} />
			</section>
			<section lang="no" aria-label="Innmeldingsskjema" className="my-4">
				<RegistrationFormInteractive src={props.iframeSrc} />
			</section>
		</div>
	);
}
