export type EventCategory = "Hosted Event" | "Brand Activation" | "Partnership Event";

export type EventStatus =
  | "Open"
  | "Limited Seats"
  | "Closing Soon"
  | "Invite Only"
  | "Closed";

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];

  startDate: string;
  endDate?: string;
  time?: string;
  venue?: string;
  city?: string;

  category: EventCategory | string;
  status?: EventStatus;
  isUpcoming?: boolean;

  featuredImage: string;
  gallery: string[];
  registrationLink?: string;
  highlightText?: string;
  pastEventRecap?: string;

  published: boolean;
  seoTitle: string;
  seoDescription: string;
};
