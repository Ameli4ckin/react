import React, { useState } from "react";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./utils/ThemeContext";
import { Provider } from 'react-redux'
import { store } from "./store";
import { AppRouter } from "./components/AppRouter";

export const App: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
};