export const allNewsQuery = `*[_type == "newsPost"] | order(publishDate desc){
  _id,
  title,
  slug,
  excerpt,
  category,
  publishDate,
  seoTitle,
  seoDescription,
  body
}`;
export const newsBySlugQuery = `*[_type == "newsPost" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  excerpt,
  category,
  publishDate,
  seoTitle,
  seoDescription,
  body
}`;
export const allEventsQuery = `*[_type == "event"] | order(eventDate desc){
  _id,
  title,
  slug,
  location,
  shortDescription,
  eventDate,
  published,
  seoTitle,
  seoDescription,
  fullDescription
}`;
export const eventBySlugQuery = `*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  location,
  shortDescription,
  eventDate,
  published,
  seoTitle,
  seoDescription,
  fullDescription
}`;
