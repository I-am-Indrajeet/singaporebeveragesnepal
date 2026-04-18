export const BRAND = {
  name: "Singapore Beverages",
  legalName: "Singapore Beverages Nepal Pvt. Ltd.",
  website: "https://singaporebeverage.com",
  email: "Singapore.beverages.nepal@gmail.com",
  phoneNumbers: ["+977 980-1129639", "+977 9801455597"],
  address: {
    streetAddress: "Mechinagar-14",
    addressLocality: "Jhapa",
    addressRegion: "Koshi",
    postalCode: "57200",
    addressCountry: "NP",
  },
  socialLinks: {
    linkedin: "https://np.linkedin.com/company/singapore-beverages-nepal-pvt-ltd",
    facebook: "https://www.facebook.com/singaporebeverages/reels/",
    instagram: "https://www.instagram.com/reel/C4YFGfXBz8l/",
    tiktok: "",
    youtube: "",
    twitter: "",
  },
  creatorMarketingKitUrl: "",
} as const;

export const BRAND_PHONE_LINKS = BRAND.phoneNumbers.map((phone) => ({
  display: phone,
  href: `tel:${phone.replace(/[^\d+]/g, "")}`,
}));
