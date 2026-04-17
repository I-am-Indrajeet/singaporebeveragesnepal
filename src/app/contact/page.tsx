import type { Metadata } from "next";

import { ContactEnquiryForm } from "@/components/contact/ContactEnquiryForm";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { BRAND, BRAND_PHONE_LINKS } from "@/config/brand";
import { PageHero } from "@/components/shared/PageHero";
import { buildBreadcrumbSchema, buildLocalBusinessSchema, buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Singapore Beverages for general enquiries, commercial discussions, or event-related questions in Nepal.",
  path: "/contact",
  keywords: ["contact singapore beverages", "beverage company contact nepal"],
});

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pb-32">
      <SchemaScript
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <SchemaScript schema={buildLocalBusinessSchema()} />
      
      <PageHero 
        label="Get in touch"
        title="Start a conversation."
        description="Reach out to the Singapore Beverages team for general enquiries, commercial discussions, or event-related questions in Nepal."
        gradientFrom="from-zinc-100"
      />

      <div className="mx-auto max-w-[85rem] px-5 md:px-8 lg:px-10 pt-20">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[2rem] border border-zinc-200 bg-white p-8">
            <div>
              <h2 className="font-heading text-2xl text-zinc-950">General enquiries</h2>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-3 block text-sm leading-7 text-zinc-600 transition hover:text-zinc-950"
              >
                {BRAND.email}
              </a>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-zinc-950">Phone</h2>
              <div className="mt-3 space-y-1 text-sm leading-7 text-zinc-600">
                {BRAND_PHONE_LINKS.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="block transition hover:text-zinc-950"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-zinc-950">Location</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {BRAND.address.streetAddress}, {BRAND.address.addressLocality},{" "}
                {BRAND.address.addressRegion} {BRAND.address.postalCode}, Nepal
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-zinc-950">LinkedIn</h2>
              <a
                href={BRAND.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm leading-7 text-zinc-600 transition hover:text-zinc-950"
              >
                Singapore Beverages Nepal Pvt Ltd
              </a>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-zinc-950">Map</h2>
              <div className="mt-4 flex min-h-[16rem] items-center justify-center rounded-[1.5rem] bg-zinc-100 text-sm text-zinc-500">
                Map placeholder for Mechinagar-14, Jhapa, Nepal
              </div>
            </div>
          </div>
          <ContactEnquiryForm />
        </section>
      </div>
    </main>
  );
}
