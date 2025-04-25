import { PortableTextBlock } from "sanity";
import PortableText from "../portable-text";
import Scrollable from "../scrollable";

export default function RegistrationFormTermsAndConditions({
	title,
	body,
}: {
	title: string;
	body: PortableTextBlock[];
}) {
	return (
		<Scrollable>
			<PortableText value={body} />
		</Scrollable>
	);
}
