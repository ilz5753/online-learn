import Animated from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fontSize, fw, padding, squareLayout, styles } from "../../../common/style";
import { FormatDate } from "../../../common/utils/date";
import { ATO } from "../../animatedComponents";
import { Gap } from "../../gap";
import { INotificationsNotification } from "./type";

export function NotificationsNotification({ Svg, bg, title, date, onPress, disabled }: INotificationsNotification) {
    let { theme: { colors } } = useTheme()
    return (
        <ATO
            {...{
                style: [fw, padding('', 22.94), backgroundColor(colors.loginFormBg), borderRadius('', 13.764), styles.fdr, styles.aic],
                onPress,
                disabled,
                activeOpacity: 0.84
            }}
        >
            <Animated.View
                {...{
                    style: [squareLayout(55.056), borderRadius('', 9.176), styles.center, backgroundColor(bg)]
                }}
            >
                <Svg />
            </Animated.View>
            {Gap({ type: "l", size: 18.352 })}
            <Animated.View
                {...{
                    style: [styles.aiFs]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(13.764), color(colors.text1), styles.tal]
                    }}
                >
                    {title}
                </Animated.Text>
                {Gap({ size: 6.882 })}
                <Animated.Text
                    {...{
                        style: [fontSize(13.764), color(colors.text2), styles.tal]
                    }}
                >
                    {FormatDate(date)}
                </Animated.Text>
            </Animated.View>
        </ATO>
    )
}