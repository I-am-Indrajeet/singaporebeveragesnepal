"use client";

import { createContext, useContext, useMemo, useState } from "react";

import { PRODUCTS } from "@/data/products";

type HeroThemeContextValue = {
  accentColor: string;
  setAccentColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
};

const defaultBackgroundColor = "#f6f2eb";

const HeroThemeContext = createContext<HeroThemeContextValue>({
  accentColor: PRODUCTS[0].accentColor,
  setAccentColor: () => undefined,
  backgroundColor: defaultBackgroundColor,
  setBackgroundColor: () => undefined,
});

export function HeroThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accentColor, setAccentColor] = useState(PRODUCTS[0].accentColor);
  const [backgroundColor, setBackgroundColor] = useState(defaultBackgroundColor);

  const value = useMemo(
    () => ({ accentColor, setAccentColor, backgroundColor, setBackgroundColor }),
    [accentColor, backgroundColor],
  );

  return (
    <HeroThemeContext.Provider value={value}>
      {children}
    </HeroThemeContext.Provider>
  );
}

export function useHeroTheme() {
  return useContext(HeroThemeContext);
}
