"use server";
import { Language } from "@/types/language";
import AnalyticsInteractive from "./analytics-interactive";
import { getGAConsent, hasGACookies } from "@/app/actions/ga-cookies";
import { draftMode } from "next/headers";

const consentCookieName = "_ga_consent";

export default async function Analytics({ language }: { language: Language }) {
	if (process.env.NODE_ENV !== "production" || (await draftMode()).isEnabled)
		return;
	const initialConsent = await getGAConsent(consentCookieName);
	return (
		<AnalyticsInteractive
			consentCookieName={consentCookieName}
			language={language}
			initialConsent={initialConsent}
			initialDeleteCookies={
				!initialConsent && (await hasGACookies(consentCookieName))
			}
		/>
	);
}
