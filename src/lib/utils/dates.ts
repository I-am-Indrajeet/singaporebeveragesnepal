export function parseLocalDate(dateString: string) {
  const normalized = dateString.includes("T") ? dateString : `${dateString}T00:00:00`;
  return new Date(normalized);
}

export function formatShortDate(dateString: string) {
  const date = parseLocalDate(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatMonthLabel(dateString: string) {
  const date = parseLocalDate(dateString);
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
}

export function getMonthKey(dateString: string) {
  const date = parseLocalDate(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export function formatEventDateRange(startDate: string, endDate?: string) {
  if (!endDate) {
    return formatShortDate(startDate);
  }

  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);

  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();

  if (sameMonth) {
    const startLabel = new Intl.DateTimeFormat("en-US", { month: "short" }).format(start);
    const endYear = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(end);
    return `${startLabel} ${start.getDate()}–${end.getDate()}, ${endYear}`;
  }

  const startLabel = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(
    start,
  );
  const endLabel = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(
    end,
  );

  if (sameYear) {
    return `${startLabel} – ${endLabel}, ${end.getFullYear()}`;
  }

  return `${formatShortDate(startDate)} – ${formatShortDate(endDate)}`;
}

