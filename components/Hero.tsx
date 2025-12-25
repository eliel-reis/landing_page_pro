import Link from "next/link"

import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-4xl font-bold">
        {siteConfig.headline}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {siteConfig.subheadline}
      </p>

      <Link
        href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
          siteConfig.whatsapp.message
        )}`}
        className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl transition hover:bg-gray-800"
      >
        Quero meu site agora
      </Link>
    </section>
  );
}
