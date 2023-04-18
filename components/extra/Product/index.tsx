import Animated from "react-native-reanimated";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fontSize, fw, padding, squareLayout, styles } from "../../../common/style";
import { AII, ATO } from "../../animatedComponents";
import { Gap } from "../../gap";
import { IProduct } from "./type";

export function Product({ uri, name, seller, price, time, onPress, disabled }: IProduct) {
    let { theme: { colors } } = useTheme()
    let convertor = (s: string) => s.split("").map((k) => {
        let key = `auth.keypad["${k}"]`;
        return i18n.get(key) ? i18n.t(key) : k;
    }).join("");
    return (
        <ATO
            {...{
                style: [fw, padding('', 16.057), styles.fdr, styles.aic, backgroundColor(colors.loginFormBg), borderRadius("", 13.764)],
                activeOpacity: 0.84,
                onPress,
                disabled,
            }}
        >
            <Animated.Image
                {...{
                    source: { uri },
                    style: [squareLayout(77.996), borderRadius('', 9.176)]
                }}
            />
            {Gap({ type: "l", size: 40.145 })}
            <Animated.View
                {...{
                    style: [styles.aiFs]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(16.058), color(colors.text1), styles.foWe6]
                    }}
                >
                    {name}
                </Animated.Text>
                {Gap({ size: 3 })}
                <Animated.View
                    {...{
                        style: [styles.fdr, styles.aic]
                    }}
                >
                    <AII
                        {...{
                            name: `ios-person`,
                            size: 13.764,
                            color: colors.text2
                        }}
                    />
                    {Gap({ type: "l", size: 4.588 })}
                    <Animated.Text
                        {...{
                            style: [fontSize(13.764), color(colors.text2)]
                        }}
                    >
                        {seller}
                    </Animated.Text>
                </Animated.View>
                {Gap({ size: 3 })}
                <Animated.View
                    {...{
                        style: [styles.fdr, styles.aic]
                    }}
                >
                    <Animated.View
                        {...{
                            style: [styles.fdr, styles.aic]
                        }}
                    >
                        <Animated.Text
                            {...{
                                style: [fontSize(18.352), color(colors.primary), styles.foWe8]
                            }}
                        >
                            {convertor(`${price.unit} ${price.value}`)}
                        </Animated.Text>
                    </Animated.View>
                    {Gap({ type: "l", size: 6.882 })}
                    <Animated.View
                        {...{
                            style: [styles.fdr, styles.aic, backgroundColor(colors.secondary), padding("h", 9.176), padding("v", 4.588), borderRadius('', 14.911)]
                        }}
                    >
                        <Animated.Text
                            {...{
                                style: [fontSize(13.764), color(colors.orange)]
                            }}
                        >
                            {`${convertor(time.value.toString())} ${i18n.t(`timeUnits["${time.unit}"]`)}`}
                        </Animated.Text>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </ATO>
    );
}