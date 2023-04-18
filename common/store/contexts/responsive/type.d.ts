export type TOrientation = "PORTRAIT" | "LANDSCAPE";
export type TDevice = "MOBILE" | "TABLET" | "LAPTOP" | "DESKTOP" | "TV";
export interface IResponsive {
    isPortrait: boolean;
    isLandscape: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
    isTv: boolean;
}
export interface IResponsiveContext {
    responsive: IResponsive;
}
