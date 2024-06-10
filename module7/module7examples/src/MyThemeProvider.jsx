import { createContext } from "react";
import { useState } from "react";
export const themes = {
    light: {
        foreground: "#333333",
        background: "#BAE2FF"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};
// named export for this context (to be used via useContext elsewhere)
export const MyThemeContext = createContext({ theme: themes.light });
// provider wrapper. uses its own state to track which theme is in use
// use it in App.jsx like <MyThemeProvider>...</MyThemeProvider>
export default function MyThemeProvider(props) 
{
    const [theme, setTheme] = useState(themes.light);
    // helper boolean to tell if we’re currently in dark mode
    const darkMode = theme.background === themes.dark.background;
    
    return (
        <MyThemeContext.Provider value={{ theme, setTheme, darkMode }}>
            {props.children}
        </MyThemeContext.Provider>
    );
}