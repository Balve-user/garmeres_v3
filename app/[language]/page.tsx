import { generateStaticLanguageParams } from "@/app/navigation/language";
import { Language, forceLanguage, isLanguage } from "@/types/language";
import { notFound, permanentRedirect } from "next/navigation";
import { homeFullSlug } from "@/utils/slugs";

export const generateStaticParams = generateStaticLanguageParams;

export const dynamicParams = true;

export default async function Page(props: {
	params: Promise<{ language?: string } | null>;
}) {
	const p = await props.params;
	if (!isLanguage(p?.language)) notFound();
	const language = forceLanguage(p?.language);
	permanentRedirect(homeFullSlug[language as Language]);
}
