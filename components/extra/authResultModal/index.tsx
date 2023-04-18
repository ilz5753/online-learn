import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fontSize, full, fw, height, padding, squareLayout, styles } from "../../../common/style";
import { AII, ATO } from "../../animatedComponents";
import { SimpleButton } from "../../buttons/simple";
import { Gap } from "../../gap";
import { IAuthResultModal } from "./type";
import { useAndroidNavigationBar } from "../../../common/hooks/androidNavigationBar";
import { noop } from "../../../common/utils/funcs";

export function AuthResultModal({ success, title, description, successText, failText, onPress, closeModal }: IAuthResultModal) {
    let { theme: { colors } } = useTheme()
    useAndroidNavigationBar(colors.text2, true)
    let bgc = colors[success ? "primary" : "red"]
    return (
        <ATO
            {...{
                style: [styles.overlay, full, backgroundColor(colors.text2), styles.jcc, padding('h', 48.174)],
                onPress: closeModal,
                activeOpacity: 1,
                entering: FadeIn,
                exiting: FadeOut,
            }}
        >
            <ATO
                {...{
                    style: [backgroundColor(colors.bg), borderRadius('', 13.764), padding('h', 18.352)],
                    onPress: noop,
                    activeOpacity: 1,
                }}
            >
                {Gap({ size: 55.056 })}
                <Animated.View
                    {...{
                        style: [styles.aic,]
                    }}
                >
                    <Animated.View
                        {...{
                            style: [squareLayout(73.408), backgroundColor(bgc), borderRadius("", 36.704), styles.center]
                        }}
                    >
                        <AII
                            {...{
                                name: `ios-${success ? "checkmark" : "close"}`,
                                size: 61.938,
                                color: colors.white
                            }}
                        />
                    </Animated.View>
                    {Gap({ size: 18.352 })}
                    <Animated.Text
                        {...{
                            style: [fontSize(18), color(colors.text1), styles.foWe5]
                        }}
                    >
                        {title}
                    </Animated.Text>
                    {Gap({ size: 17.205 })}
                    <Animated.Text
                        {...{
                            style: [fontSize(14), color(colors.text2), styles.tac]
                        }}
                    >
                        {description}
                    </Animated.Text>
                    {Gap({ size: 22.94 })}
                    <Animated.View
                        {...{
                            style: [fw, height(57.35)]
                        }}
                    >
                        <SimpleButton
                            {...{
                                bg: bgc,
                                color: colors.white,
                                text: success ? successText : failText,
                                onPress
                            }}
                        />
                    </Animated.View>
                </Animated.View>
                {Gap({ size: 41.292 })}
            </ATO>
        </ATO>
    )
}