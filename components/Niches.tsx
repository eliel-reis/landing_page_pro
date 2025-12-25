import { siteConfig } from "@/config/site";

export default function Niches() {
  return (
    <section className="py-16 text-center">
      <p className="text-lg">
        {siteConfig.niches.join(" • ")}
      </p>
    </section>
  );
}
