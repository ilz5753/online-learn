import Animated from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fontSize, height, padding, styles } from "../../../common/style";
import { ATO } from "../../animatedComponents";
import { ISimpleTabItem } from "./type";

export default function SimpleTabItem({ active, text, onPress, disabled }: ISimpleTabItem) {
    let { theme: { colors } } = useTheme()
    return (
        <ATO
            {...{
                style: [padding('h', 22.94), height(34.41), borderRadius("", 17.21), backgroundColor(colors[active ? "primary" : "loginFormBg"]), styles.center],
                onPress,
                disabled,
                activeOpacity: 0.84
            }}
        >
            <Animated.Text
                {...{
                    style: [fontSize(16.058), color(colors[active ? "white" : "text1"])]
                }}
            >
                {text}
            </Animated.Text>
        </ATO>
    )
}