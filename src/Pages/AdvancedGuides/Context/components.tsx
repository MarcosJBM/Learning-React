import React, { createContext, useContext } from "react";

import { Theme, ThemeContextType } from "./type";

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  setTheme: theme => console.warn("no theme provider"),
});

const useTheme = () => useContext(ThemeContext);

const MyPage = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <button onClick={() => setTheme(Theme.Dark)}>Mudar Tema</button>
    </div>
  );
};

export function App() {
  const [theme, setTheme] = React.useState(Theme.Light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MyPage />
    </ThemeContext.Provider>
  );
}
