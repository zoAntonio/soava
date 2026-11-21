import AboutPage from "@/components/AboutPage";
import { pageMetadata } from "@/lib/i18n";

export const metadata = pageMetadata("en", "about");

export default function Page() {
  return <AboutPage lang="en" />;
}
