import { defaultLanguage } from "@/types/language";
import RootLayout from "../components/layout/root-layout";
import { getMenuItems } from "@/services/sanity-service";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = defaultLanguage;
  const menuItems = await getMenuItems({
    language: language,
  });
  return (
    <RootLayout
      menuItems={menuItems}
      params={{
        language,
      }}
    >
      {children}
    </RootLayout>
  );
}
