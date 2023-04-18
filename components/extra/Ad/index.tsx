import Animated from "react-native-reanimated";
import { backgroundColor, borderRadius, color, fontSize, fw, height, layout, maxWidth, padding, styles, width } from "../../../common/style";
import { useWindowDimensions } from "react-native";
import { useTheme } from "../../../common/store/contexts/theme";
import { SimpleButton } from "../../buttons/simple";
import { IAd } from "./type";
import { isUndefined } from "lodash";

export default function Ad({ title, btn, Svg }: IAd) {
    let dimension = useWindowDimensions()
    let { theme: { colors } } = useTheme()
    let hasTitle = !isUndefined(title)
    let hasBtn = !isUndefined(btn)
    let hasData = hasTitle || hasBtn;
    return (
        <Animated.View
            {...{
                style: [layout(dimension.width * 0.664, 176.638), borderRadius('', 18.352), backgroundColor(colors.cyan), hasData ? styles.fdr : styles.jcc, styles.aic]
            }}
        >
            {hasData && (
                <Animated.View
                    {...{
                        style: [maxWidth(dimension.width * 0.36), height(126.17), styles.jcSe, padding('l', 20.818), styles.aiFs]
                    }}
                >
                    {hasTitle && (
                        <Animated.Text
                            {...{
                                style: [fontSize(18.352), styles.foWe8, color(colors.black), styles.tal]
                            }}
                        >
                            {title}
                        </Animated.Text>
                    )}
                    {hasBtn && (
                        <Animated.View
                            {...{
                                style: [layout(97.495, 35.557)]
                            }}
                        >
                            <SimpleButton
                                {...{
                                    bg: colors.orange,
                                    ...btn,
                                    color: colors.white,
                                }}
                            />
                        </Animated.View>
                    )}
                </Animated.View>
            )}
            <Svg />
        </Animated.View>
    )
}