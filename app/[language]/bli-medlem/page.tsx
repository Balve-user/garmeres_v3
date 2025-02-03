import { HeaderMargin } from "@/app/components/layout/header";
import RegistrationForm from "@/app/components/sanity/registrationForm";

export default function Page() {
  return (
    <div className="flex flex-col flex-grow w-full max-w-[1024px] mx-auto gap-2 bg-white text-black px-4 md:px-10 xl:px-14 pt-16 pb-24">
      <HeaderMargin />
      <div className="flex flex-col prose px-2">
        <h1 className="mb-2">Searvva miellahttun</h1>
        <p>
          Enhver som identifiserer seg som samisk og skeiv kan melde seg som
          ordinært medlem i Garmeres, som gir tale- og stemmerett ved årsmøter.
          Det er også mulig å involvere seg i Garmeres som støttemedlem. Du vil
          da få talerett på årsmøter, men ikke stemmerett.
        </p>
        <details className="[&>p]:text-xs max-w-[600px] [&>p]:font-normal">
          <summary className="text-sm font-medium">
            Info om medlemskap og betaling
          </summary>
          <p>
            Ved utfylling av innmeldingsskjemaet på nettsida vår vil det bli
            oppretta et medlemskap på deg, og du vil få opp ulike alternativer å
            betale på - for eksempel bankbetaling via nettbanken din, Vipps på
            nett og lignende. Medlemskap i vår organisasjon er per kalenderår.
          </p>
          <p>
            I det du har betalt kontingenten din, er du å regne som aktiv medlem
            i organisasjonen, og har medlemsrettigheter i tråd med vedtektene
            våre. Du kan når som helst melde deg ut, men har ikke rett på
            tilbakebetaling av kontingent som du har betalt. Du kan melde deg ut
            selv fra Min side, eller kontakte oss på meile@garmeres.com.
          </p>
          <p>
            Hvert år fornyes medlemmer til neste år, og betalingsinformasjon
            sendes ut. Med mindre du velger å inngå auto-trekk-avtale med
            AvtaleGiro, vil du ikke bli trukket noe som helst automatisk for
            neste medlemsår - du må selv aktivt velge å betale kontingenten din
            dersom du fortsatt ønsker å være medlem.
          </p>
        </details>
      </div>
      <RegistrationForm src="https://garmeres.hypersys.no/old/forms/innmelding/iframe/" />
    </div>
  );
}
