import { createContext } from "react";

type ThemeContextType = {
  theme: boolean;
  settheme: (value: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: false,
  settheme: () => {}
});
