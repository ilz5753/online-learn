import { IResponsiveContext, TDevice, TOrientation } from "./type";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
let initial: IResponsiveContext = {
    responsive: {
        isPortrait: true,
        isLandscape: false,
        isMobile: true,
        isTablet: false,
        isLaptop: false,
        isDesktop: false,
        isTv: false
    }
}
const ResponsiveContext = createContext(initial);
export const useResponsive = () => useContext(ResponsiveContext);
export function ResponsiveProvider({ children }: PropsWithChildren) {
    let [orientation, setOrientation] = useState<TOrientation>("PORTRAIT");
    let [device, setDevice] = useState<TDevice>("MOBILE");
    let { width, height } = useWindowDimensions();
    useEffect(() => {
        let orientation: TOrientation = height > width ? "PORTRAIT" : "LANDSCAPE";
        setOrientation(orientation);
    }, [width, height]);
    useEffect(() => {
        let newDevice: TDevice = "MOBILE";
        if (width > 1201) newDevice = "TV";
        else if (width <= 1200 && width > 1025) newDevice = "DESKTOP";
        else if (width <= 1024 && width > 769) newDevice = "LAPTOP";
        else if (width <= 768 && width > 481) newDevice = "TABLET";
        setDevice(newDevice);
    }, [width])
    return (
        <ResponsiveContext.Provider
            {...{
                value: {
                responsive: {
                        isPortrait: orientation === "PORTRAIT",
                        isLandscape: orientation === "LANDSCAPE",
                        isMobile: device === "MOBILE",
                        isTablet: device === "TABLET",
                        isLaptop: device === "LAPTOP",
                        isDesktop: device === "DESKTOP",
                        isTv: device === "TV"
                    }
                }
            }}
        >
            {children}
        </ResponsiveContext.Provider>
    )
}