import { siteConfig } from "@/config/site";

export default function Offer() {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold">
        {siteConfig.offer.price}
      </h2>

      <p className="mt-2">{siteConfig.offer.description}</p>
      <p className="mt-1 text-sm text-gray-600">
        {siteConfig.offer.payment}
      </p>
    </section>
  );
}
