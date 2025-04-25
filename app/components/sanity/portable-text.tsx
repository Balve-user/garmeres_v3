import {
	PortableText as SanityPortableText,
	PortableTextComponents,
	PortableTextTypeComponentProps,
} from "@portabletext/react";
import PortableImage, { PortableImageProps } from "./portable-image";
import { PortableTextBlock } from "sanity";
import BlogBrowser from "./blog-browser";
import EventsBrowser from "./events-browser";
import { Language } from "@/types/language";
import Accordion from "./accordion";
import { ReactNode } from "react";
import MembershipRegistrationForm from "@/app/components/sanity/membership-registration-form";

export default function PortableText({
	value,
	disableImages,
}: {
	value: PortableTextBlock[];
	disableImages?: boolean;
}) {
	const components: PortableTextComponents = {
		types: {
			"portable-image": ({ value }: { value: PortableImageProps }) => {
				return disableImages === true ? null : <PortableImage value={value} />;
			},
			"blog-browser": (
				props: PortableTextTypeComponentProps<{ language: Language }>
			) => {
				return <BlogBrowser {...props.value} />;
			},
			"events-browser": (
				props: PortableTextTypeComponentProps<{ language: Language }>
			) => {
				return <EventsBrowser {...props.value} />;
			},
			"membership-registration-form": (
				props: PortableTextTypeComponentProps<{
					title: string;
					body: PortableTextBlock[];
				}>
			) => {
				return <MembershipRegistrationForm title={props.value.title} />;
			},
			accordion: (
				props: PortableTextTypeComponentProps<{
					summary: ReactNode | string;
					text: PortableTextBlock[];
				}>
			) => {
				return (
					<Accordion summary={props.value.summary}>
						<PortableText value={props.value.text} />
					</Accordion>
				);
			},
		},
		list: {
			bullet: ({ children }) => <ul className="list-disc">{children}</ul>,
			number: ({ children }) => <ol className="list-decimal">{children}</ol>,
		},
		marks: {
			link: ({ children, value }) => {
				return (
					<a href={value.href} rel="nofollow" target="_blank">
						{children}
					</a>
				);
			},
		},
	};
	return <SanityPortableText value={value} components={components} />;
}
