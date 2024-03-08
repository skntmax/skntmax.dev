import React, { createContext, useState } from "react";
import { Input, theme } from "antd";

export const ThemeContextProvider = createContext({});

function ThemeProvider({ children }) {
  const [themes, setThemes] = useState({
    active: "dark",
    light: {
      token: {
        // Seed Token
        colorPrimary: "#00b96b",
      },
      components: {
        Button: {
          colorPrimary: "#00b96b",
          algorithm: true, // Enable algorithm
        },
        Input: {
          colorPrimary: "#eb2f96",
          algorithm: true, // Enable algorithm
        },
      },
    },
    dark: {
      token: {
        // Seed Token
        colorPrimary: "#00b96b",
        borderRadius: 2,
      },

      components: {
        Button: {
          colorPrimary: "#00b96b",
          algorithm: true, // Enable algorithm
        },
        Input: {
          colorPrimary: "#eb2f96",
          algorithm: true, // Enable algorithm
        },
      },
    },
  });
  return (
    <ThemeContextProvider.Provider value={{ themes, setThemes }}>
      {children}
    </ThemeContextProvider.Provider>
  );
}

export default ThemeProvider;
