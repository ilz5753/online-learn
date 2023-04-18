import Animated from "react-native-reanimated";
import { margin } from "../../common/style";
import { IGap } from "./type";
import { PropsWithChildren } from "react";

export function Gap({ type = "t", size = 0, children }: PropsWithChildren<IGap>) {
    return (
        <Animated.View {...{ style: [margin(type, size)], children }} />
    )
}