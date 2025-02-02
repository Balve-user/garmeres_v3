import { HeaderMargin } from "@/app/components/layout/header";
import PageTextContainer from "@/app/components/layout/page-text-contianer";
import RegistrationForm from "@/app/components/registrationForm";
import { defaultLanguage, Language, languageNames } from "@/types/language";

export default function Page({
  params,
}: {
  params: {
    language?: Language;
  };
}) {
  return (
    <div>
      <PageTextContainer>
        <HeaderMargin />
        <span>Test</span>
        <RegistrationForm language={params.language || defaultLanguage} />
      </PageTextContainer>
    </div>
  );
}
