import Animated from "react-native-reanimated";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fontSize, fw, padding, squareLayout, styles } from "../../../common/style";
import { FormatDate } from "../../../common/utils/date";
import { ATO } from "../../animatedComponents";
import { Gap } from "../../gap";
import { IMessageOverview } from "./type";

export function MessageOverview({ uri, name, isOnline, date, text, assets, onPress, disabled }: IMessageOverview) {
    let { theme: { colors } } = useTheme()
    let br = borderRadius("", 13.764)
    return (
        <ATO
            {...{
                style: [fw, padding('', 22.94), br, backgroundColor(colors.loginFormBg)],
                onPress,
                disabled,
                activeOpacity: 0.84
            }}
        >
            <Animated.View
                {...{
                    style: [styles.fdr, styles.aiFs, styles.jcSb]
                }}
            >
                <Animated.View
                    {...{
                        style: [styles.fdr, styles.aic]
                    }}
                >
                    <Animated.Image
                        {...{
                            source: {
                                uri
                            },
                            style: [squareLayout(55.056), br]
                        }}
                    />
                    {Gap({ type: "l", size: 13.764 })}
                    <Animated.View
                        {...{
                            style: [styles.aiFs,]
                        }}
                    >
                        <Animated.Text
                            {...{
                                style: [fontSize(13.764), styles.foWeB, color(colors.text1)]
                            }}
                        >
                            {name}
                        </Animated.Text>
                        {Gap({ size: 3.41 })}
                        <Animated.Text
                            {...{
                                style: [fontSize(13.764), styles.foWeB, color(colors.text2)]
                            }}
                        >
                            {i18n.t(`main.Message.message.template.status["${isOnline ? "on" : "off"}"]`)}
                        </Animated.Text>
                    </Animated.View>
                </Animated.View>
                <Animated.Text
                    {...{
                        style: [fontSize(13.764), color(colors.text2)]
                    }}
                >
                    {FormatDate(date)}
                </Animated.Text>
            </Animated.View>
            {Gap({ size: 13.764 })}
            <Animated.Text
                {...{
                    style: [fontSize(13.764), color(colors.text1)]
                }}
            >
                {text}
            </Animated.Text>
            {/* {assets && (
                <>
                    {Gap({ size: 13.764 })}
                    <GalleryView
                        {...{
                            assets
                        }}
                    />
                </>
            )} */}
        </ATO>
    )
}