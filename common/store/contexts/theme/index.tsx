import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren, createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { themes } from "./themes";
import { light } from "./themes/light";
import { IThemeContext, TThemeMode } from "./type";
function StatusBarStyle(isDark = false) {
    return isDark ? "light" : "dark";
}
let initial: IThemeContext = {
    theme: light,
    isDarkMode: false,
    setThemeMode(_: TThemeMode) { }
}
const ThemeContext = createContext(initial);
export const useTheme = () => useContext(ThemeContext);
export function ThemeProvider({ children }: PropsWithChildren) {
    let colorScheme = useColorScheme();
    let [themeMode, setThemeMode] = useState<TThemeMode>("system");
    let SchemeMode = useMemo(() => themeMode === "system" ? colorScheme : themeMode, [colorScheme, themeMode])
    let theme = useMemo(() => themes.find(({ mode }) => mode === SchemeMode)!, [SchemeMode, themes]);
    return (
        <ThemeContext.Provider
            {...{
                value: {
                    theme,
                    isDarkMode: SchemeMode === "dark",
                    setThemeMode,
                },
            }}
        >
            {children}
            <StatusBar
                {...{
                    style: StatusBarStyle(themeMode === "system" ? colorScheme === "dark" : themeMode === "dark"),
                }}
            />
        </ThemeContext.Provider>
    )
}