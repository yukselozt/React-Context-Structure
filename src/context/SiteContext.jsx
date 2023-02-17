import { createContext } from "react";
import { useState, useEffect } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("tr");

  const data = {
    theme,
    setLanguage,
    setTheme,
    language,
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.style.background = "rgb(255, 78, 175,0.35)";
    } else {
      document.body.style.background = "gray";
    }
  });

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
