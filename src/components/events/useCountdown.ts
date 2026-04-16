"use client";

import * as React from "react";

import { parseLocalDate } from "@/lib/utils/dates";

export type CountdownParts = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getParts(target: Date) {
  const totalMs = target.getTime() - Date.now();
  const safeMs = Math.max(0, totalMs);

  const days = Math.floor(safeMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeMs / (1000 * 60)) % 60);
  const seconds = Math.floor((safeMs / 1000) % 60);

  return { totalMs, days, hours, minutes, seconds };
}

export function useCountdown(targetDateString: string | undefined) {
  const target = React.useMemo(() => {
    if (!targetDateString) return null;
    return parseLocalDate(targetDateString);
  }, [targetDateString]);

  const [parts, setParts] = React.useState<CountdownParts>(() =>
    target ? getParts(target) : { totalMs: 0, days: 0, hours: 0, minutes: 0, seconds: 0 },
  );

  React.useEffect(() => {
    if (!target) return;

    setParts(getParts(target));
    const id = window.setInterval(() => setParts(getParts(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return parts;
}

