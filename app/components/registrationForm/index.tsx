"use client";
import { Language } from "@/types/language";

export default function RegistrationForm({ language }: { language: Language }) {
  return (
    <iframe
      style={{
        minHeight: "900px",
        height: "100%",
      }}
      width="100%"
      src="https://garmeres.hypersys.no/old/forms/registrerenskovvi/iframe/"
    />
  );
}
