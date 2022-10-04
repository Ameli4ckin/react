import React, { useState } from "react";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeContext } from "./utils/ThemeContext";
import { Provider } from 'react-redux'
import { persistor, store } from "./store";
import { AppRouter } from "./components/AppRouter";

export const App: FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        </ThemeContext.Provider>
      </Provider>
    </PersistGate>
  );
};