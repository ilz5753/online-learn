import { getBackgroundColorAsync, setBackgroundColorAsync } from "expo-navigation-bar";
import { useEffect } from "react";
import { ColorValue } from "react-native";
import { isAndroid } from "../style";
export async function setAndroidBgc(color: string) {
    try {
        await setBackgroundColorAsync(color);
    } catch (error) {
        console.error(error);
    }
}
export async function getAndroidBgc() {
    let color: ColorValue = "transparent";
    try {
        color = await getBackgroundColorAsync();
    } catch (error) {
        console.error(error);
    }
    return color;
}
export function useAndroidNavigationBar(color: string, condition = true) {
    useEffect(() => {
        if (isAndroid && condition)
            (async () => {
                await setAndroidBgc(color);
            })();
    }, [color, condition]);
}