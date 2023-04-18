import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, left, squareLayout, styles, top } from "../../../common/style";
import { ICircularLearningProgress } from "./type";

export function CircularLearningProgress({ size = 24, color: { from, to }, percent }: ICircularLearningProgress) {
    let { theme: { colors } } = useTheme()
    let layout = squareLayout(size)
    let fromCircleSize = size + 2;
    // let filledSize = size * percent;
    let centerCircleSize = size - 4;
    return (
        <Animated.View
            {...{
                style: [layout, styles.ofh]
            }}
        >
            <Animated.View
                {...{
                    style: [squareLayout(fromCircleSize), borderRadius("", fromCircleSize * 0.5), left(-1), top(-1), backgroundColor(from), styles.center]
                }}
            >
                {/* todo: fix this later (circularProgress) */}
                <LinearGradient
                    {...{
                        colors: [from, to],
                        start: {
                            x: 0,
                            y: 0,
                        },
                        end: {
                            x: 1,
                            y: 1,
                        },
                        style: [squareLayout(fromCircleSize), borderRadius("", fromCircleSize * 0.5)],
                    }}
                />
                <Animated.View
                    {...{
                        style: [squareLayout(centerCircleSize), styles.overlay, borderRadius('', centerCircleSize / 2), backgroundColor(colors.loginFormBg)]
                    }}
                />
            </Animated.View>
        </Animated.View>
    )
}