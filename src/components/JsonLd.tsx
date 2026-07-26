import { site } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: site.fullName,
    description: site.description,
    url: site.url,
    image: `${site.url}/images/fachada.jpg`,
    telephone: "+55-49-3222-3592",
    email: site.emails.contato,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.816,
      longitude: -50.326,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:30",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "11:30",
        closes: "14:30",
      },
    ],
    servesCuisine: ["Brasileira", "Churrasco", "Massas", "Serrana"],
    priceRange: "$$",
    sameAs: [site.social.facebook, site.social.tripadvisor],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
