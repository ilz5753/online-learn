import Animated from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { color, fontSize, styles } from "../../../common/style";
import { Gap } from "../../gap";
import { ILearningProgress } from "./type";
import { CircularLearningProgress } from "./progress";

export default function LearningProgress({ title, finished, all }: ILearningProgress) {
    let { theme: { colors } } = useTheme()
    return (
        <Animated.View
            {...{
                style: [styles.fdr, styles.aic, styles.jcSb],
            }}
        >
            <Animated.View
                {...{
                    style: [styles.fdr, styles.aic],
                }}
            >
                {/* Progress */}
                <CircularLearningProgress
                    {...{
                        color: {
                            from: colors.text4,
                            to: colors.orange
                        },
                        size: 20.646,
                        percent: (finished / all),
                    }}
                />
                {Gap({ type: "l", size: 14.911 })}
                <Animated.Text
                    {...{
                        style: [fontSize(16.508), color(colors.text1), styles.foWe6]
                    }}
                >
                    {title}
                </Animated.Text>
            </Animated.View>
            <Animated.View
                {...{
                    style: [styles.fdr, styles.aic],
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(16.508), color(colors.text1)]
                    }}
                >
                    {finished}
                </Animated.Text>
                {Gap({ type: "l", size: 4.588 })}
                <Animated.Text
                    {...{
                        style: [fontSize(16.508), color(colors.text2)]
                    }}
                >
                    /
                </Animated.Text>
                {Gap({ type: "l", size: 4.588 })}
                <Animated.Text
                    {...{
                        style: [fontSize(16.508), color(colors.text2)]
                    }}
                >
                    {all}
                </Animated.Text>
            </Animated.View>
        </Animated.View>
    )
}