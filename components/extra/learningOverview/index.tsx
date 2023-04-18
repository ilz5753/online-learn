import Animated from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fontSize, fw, height, padding, styles } from "../../../common/style";
import { ATO } from "../../animatedComponents";
import { Gap } from "../../gap";
import { LinearGradientProgress } from '../linearGradientProgress';
import { ILearningOverview } from "./type";
export default function LearningOverview({ title, moreBtn, unit, progress }: ILearningOverview) {
    let { theme: { colors } } = useTheme()
    let gapBetweenTimes = Gap({ type: "l", size: 4.588 })
    let progressBr = borderRadius("", 3.441);
    return (
        <Animated.View
            {...{
                style: [fw, height(110.96), backgroundColor(colors.loginFormBg), borderRadius('', 13.764), padding('', 18.352)]
            }}
        >
            <Animated.View
                {...{
                    style: [styles.fdr, styles.jcSb]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(14), color(colors.text2)]
                    }}
                >
                    {title}
                </Animated.Text>
                {moreBtn && (
                    <ATO
                        {...{
                            onPress: moreBtn.onPress,
                            disabled: moreBtn.disabled,
                            activeOpacity: 0.84,
                        }}
                    >
                        <Animated.Text
                            {...{
                                style: [fontSize(14), color(moreBtn[moreBtn.disabled ? "disabledColor" : "color"])]
                            }}
                        >
                            {moreBtn.text}
                        </Animated.Text>
                    </ATO>
                )}
            </Animated.View>
            {Gap({ size: 4.588 })}
            <Animated.View
                {...{
                    style: [styles.aiFs]
                }}
            >
                <Animated.View
                    {...{
                        style: [styles.fdr, styles.aiFe]
                    }}
                >
                    <Animated.Text
                        {...{
                            style: [fontSize(20), styles.foWe8, color(colors.text1)]
                        }}
                    >
                        {progress.finished}{unit}
                    </Animated.Text>
                    {gapBetweenTimes}
                    <Animated.Text
                        {...{
                            style: [fontSize(14), color(colors.text2)]
                        }}
                    >
                        /
                    </Animated.Text>
                    {gapBetweenTimes}
                    <Animated.Text
                        {...{
                            style: [fontSize(14), color(colors.text2)]
                        }}
                    >
                        {progress.all}{unit}
                    </Animated.Text>
                </Animated.View>
            </Animated.View>
            {Gap({ size: 11.47 })}
            <LinearGradientProgress {...progress} />
            {/* <Animated.View
                {...{
                    style: [fw, height(6.882), progressBr, backgroundColor(colors.text4), bw1, borderColor("", colors.text4)]
                }}
            >
                <LinearGradient
                    {...{
                        colors: [from, to],
                        style: [fh, progressBr, width(`${(passedTime / time) * 100}%`)],
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
            </Animated.View> */}
        </Animated.View>
    )
}