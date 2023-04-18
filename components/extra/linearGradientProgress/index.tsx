import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { backgroundColor, borderRadius, fh, fw, height, width } from "../../../common/style";
import { ILinearGradientProgress } from "./type";
import { isRTL } from "../../../common/utils/dir";

export function LinearGradientProgress({ from, to, finished, all }: ILinearGradientProgress) {
    let progressBr = borderRadius("", 3.441);
    return (
        <Animated.View
            {...{
                style: [fw, height(6.882), progressBr, backgroundColor(from)]
            }}
        >
            <LinearGradient
                {...{
                    colors: isRTL() ? [to, from] : [from, to],
                    style: [fh, progressBr, width(`${(finished / all) * 100}%`)],
                    start: {
                        x: 0,
                        y: 0,
                    },
                    end: {
                        x: 1,
                        y: 1,
                    },
                }}
            />
        </Animated.View>
    )
}