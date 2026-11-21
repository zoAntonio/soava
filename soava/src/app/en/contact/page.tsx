import ContactPage from "@/components/ContactPage";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("en", "contact");

export default function Page() {
  return <ContactPage lang="en" />;
}
