import { siteConfig } from "@/config/site";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="text-center py-20">
      <Link
        href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
          siteConfig.whatsapp.message
        )}`}
        className="bg-black text-white px-10 py-4 rounded-xl text-lg transition hover:bg-gray-800"
      >
        Quero meu site agora
      </Link>

      <p className="mt-8 text-sm text-gray-600">
        {siteConfig.guarantee}
      </p>
    </section>
  );
}
