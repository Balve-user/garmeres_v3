import { PreviewProps } from "sanity";

export default function MembershipRegistrationFormPreview() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "16px 8px",
			}}
		>
			<span
				style={{
					fontSize: "10pt",
					textAlign: "right",
				}}
			>
				{"Membership registration form"}
			</span>
			<br />
			<div
				style={{
					padding: "8px 16px 48px 16px",
					border: "1px solid grey",
				}}
			>
				<h3>Terms and conditions</h3>
				<span aria-hidden="true">...</span>
			</div>
			<br />
			<div
				style={{
					padding: "8px 16px 48px 16px",
					border: "1px solid grey",
				}}
			>
				<h3>Registration form</h3>
				<span aria-hidden="true">...</span>
			</div>
		</div>
	);
}
