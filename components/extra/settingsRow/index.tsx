import Animated from "react-native-reanimated";
import { color, fontSize, fw, height, styles } from "../../../common/style";
import { ISettingsRow } from "./type";
import { AII, ATO } from "../../animatedComponents";
import { useTheme } from "../../../common/store/contexts/theme";
import { isRTL } from "../../../common/utils/dir";

export function SettingsRow({ text, onPress, disabled, onLongPress }: ISettingsRow) {
    let { theme: { colors } } = useTheme()
    return (
        <ATO
            {...{
                style: [fw, height(55.056), styles.fdr, styles.aic, styles.jcSb],
                activeOpacity: 0.84,
                onPress,
                onLongPress,
                disabled,
            }}
        >
            <Animated.Text
                {...{
                    style: [fontSize(18.352), color(colors.text1), styles.foWe6]
                }}
            >
                {text}
            </Animated.Text>
            <AII
                {...{
                    name: `chevron-${isRTL() ? 'back' : 'forward'}`,
                    size: 18.352,
                    color: colors.text2
                }}
            />
        </ATO>
    )
}