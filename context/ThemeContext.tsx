import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContextInt } from "../types/types";

export const ThemeContext = createContext<ThemeContextInt>({
  theme: "",
  switchTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<string>("light");

  const switchTheme = () => {
    if (theme === "light") return setTheme("dark");
    else return setTheme("light");
  };
  useEffect(() => {
    const html = window.document.documentElement;
    html.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = () => {
  return useContext(ThemeContext);
};
