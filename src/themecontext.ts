import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  settheme: (value: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  settheme: () => {}
});