import { siteConfig } from "@/config/site";

export default function Benefits() {
  return (
    <section className="py-16 max-w-3xl sm:mx-auto ml-8">
      <ul className="space-y-3">
        {siteConfig.benefits.map((item, index) => (
          <li key={index} className="text-lg">
            ✔ {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
