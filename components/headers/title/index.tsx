import Animated from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { color, fontSize, fw, height, padding, styles } from "../../../common/style";
import { ITitleHeader } from "./type";

export function TitleHeader({ title, subtitle, paddingHorizontal = 0 }: ITitleHeader) {
    let { theme: { colors } } = useTheme()
    return (
        <Animated.View
            {...{
                style: [fw, height(67.67), styles.aiFs, padding("h", paddingHorizontal)]
            }}
        >
            <Animated.Text
                {...{
                    style: [fontSize(32), color(colors.text1), styles.foWe8]
                }}
            >
                {title}
            </Animated.Text>
            {subtitle && (
                <Animated.Text
                    {...{
                        style: [fontSize(16), color(colors.text3), styles.foWe8]
                    }}
                >
                    {subtitle}
                </Animated.Text>
            )}
        </Animated.View>
    )
}