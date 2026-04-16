# Events UI structure

This folder contains the redesigned, interactive Events experience.

## Components

- `EventsExperience.tsx` — page-level client experience: tabs, filters, search, sorting, modal registration, empty states.
- `EventsHero.tsx` — full-bleed hero with cursor-follow glow, floating shapes, marquee strip, and “next event” countdown.
- `EventsControlBar.tsx` — sticky segmented navigation + filters (city/type/month) + search + sort.
- `UpcomingSpotlight.tsx` — energetic upcoming spotlight (big feature + selectable stack).
- `PastEventsTimeline.tsx` — “Moments We’ve Created” timeline with scroll-progress line + featured highlight block.
- `EventRegistrationDialog.tsx` — Participate modal (demo form). Supports deep-linking via `?participate=EVENT_SLUG`.
- `ParticipateButton.tsx` — CTA button with ripple feedback.

## Data shape

The UI consumes the TypeScript `EventItem` shape (`src/types/event.ts`), but a snake_case JSON sample is included at:

- `src/data/events.sample.json`

If your CMS returns snake_case fields (e.g. `start_date`, `short_description`), map them to the camelCase `EventItem`
fields in your CMS normalization layer (`src/lib/cms/content.ts`).

