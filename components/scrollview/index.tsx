import { PropsWithChildren } from "react";
import Animated from "react-native-reanimated";
import { IScrollView } from "./type";

export function ScrollView(props: PropsWithChildren<IScrollView>) {
    return (
        <Animated.ScrollView
            {...{
                keyboardShouldPersistTaps: "always",
                showsVerticalScrollIndicator: false,
                showsHorizontalScrollIndicator: false,
                ...props
            }}
        />
    )
}