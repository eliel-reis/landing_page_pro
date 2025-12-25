import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-gray-500">
      {siteConfig.footer}
    </footer>
  );
}
