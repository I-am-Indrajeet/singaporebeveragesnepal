export type SanityImageAsset = {
  _type: "image";
  asset?: {
    _ref: string;
    _type: "reference";
  };
};

export type SanityTextSpan = {
  _type: "span";
  text: string;
};

export type SanityBlock = {
  _type: "block";
  children?: SanityTextSpan[];
};

export type SanityNewsDocument = {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  category?: string;
  publishDate?: string;
  seoTitle?: string;
  seoDescription?: string;
  body?: SanityBlock[];
};

export type SanityEventDocument = {
  _id: string;
  title: string;
  slug?: { current?: string };
  location?: string;
  shortDescription?: string;
  eventDate?: string;
  published?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  fullDescription?: SanityBlock[];
};
