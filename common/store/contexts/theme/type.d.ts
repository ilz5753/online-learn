import { TFunc } from "../../../../type";

export type TThemeMode = "system" | "dark" | "light";
export type TThemeShadowMode = "thin" | "small" | "medium" | "large";
export interface IThemeShadow {
    color: string;
    offset: {
        width: number;
        height: number;
    };
    opacity: number;
    radius: number;
    elevation: number;
}
export interface IThemeColors {
    primary: string;
    secondary: string;
    tertiary: string;
    bg: string;
    white: string;
    orange: string;
    green: string;
    red: string;
    cyan: string;
    black: string;
    purple: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    loginBg: string;
    loginFormBg: string;
    loginFieldBg: string;
    searchBarBg: string;
    disabled: string;
    bottomBar: string;
}
export interface ITheme {
    mode: TThemeMode;
    colors: IThemeColors;
}
export interface IThemeContext {
    theme: ITheme;
    isDarkMode: boolean;
    setThemeMode: TFunc<TThemeMode>;
}