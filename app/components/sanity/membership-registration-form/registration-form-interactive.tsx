"use client";

export default function RegistrationFormInteractive({ src }: { src: string }) {
	return (
		<iframe
			className="flex flex-col justify-center -mx-2 min-h-[900px] sm:min-h-[770px] lg:min-h-[740px]"
			allowFullScreen
			lang="no"
			src={src}
			style={{
				width: "100%",
				overflowY: "visible",
			}}
		/>
	);
}
