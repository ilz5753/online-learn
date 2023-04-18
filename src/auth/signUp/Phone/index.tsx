import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAndroidNavigationBar } from "../../../../common/hooks/androidNavigationBar";
import i18n from "../../../../common/store/contexts/language";
import { useTheme } from "../../../../common/store/contexts/theme";
import { backgroundColor, borderColor, borderRadius, bw1, color, f1, fontSize, full, fw, height, padding, styles } from "../../../../common/style";
import { isRTL } from "../../../../common/utils/dir";
import { AII } from "../../../../components/animatedComponents";
import { SimpleButton } from "../../../../components/buttons/simple";
import { Keypad } from "../../../../components/extra/keypad";
import { PhoneLogo } from "../../../../components/extra/svgs/phoneLogo";
import { Gap } from "../../../../components/gap";
import { IOSHeader } from "../../../../components/headers/ios";
let MaxNumbers = 12;
export default function Phone() {
    let { theme: { colors }, isDarkMode } = useTheme();
    let insets = useSafeAreaInsets()
    let [PhoneNumber, setPhoneNumber] = useState("1234567890");
    let { navigate, goBack } = useNavigation();
    useAndroidNavigationBar(colors.loginFormBg)
    let verifyPhone = () => {
        if (PhoneNumber.length === MaxNumbers) {
            navigate("VerifyPhone", { PhoneNumber })
        }
    }
    return (
        <Animated.View
            {...{
                style: [full, backgroundColor(colors.loginBg)]
            }}
        >
            {Gap({ size: insets.top })}
            <IOSHeader
                {...{
                    title: i18n.t(`auth.cwf.title`),
                    leftButton: {
                        onPress: goBack,
                        activeOpacity: 0.84,
                        children: (
                            <AII
                                {...{
                                    name: `ios-chevron-${isRTL() ? "forward" : "back"}`,
                                    size: 24,
                                    color: colors.text1
                                }}
                            />
                        )
                    },
                    paddingHorizontal: 16
                }}
            />
            {Gap({ size: 41.292 })}
            <Animated.View
                {...{
                    style: [fw, height(146.816), styles.aic]
                }}
            >
                <PhoneLogo />
            </Animated.View>
            {Gap({ size: 41.292 })}
            <Animated.View
                {...{
                    style: [f1, borderRadius("t", 29), backgroundColor(colors.loginFormBg)]
                }}
            >
                {Gap({ size: 27.528 })}
                <Animated.Text
                    {...{
                        style: [fontSize(18), color(colors.text2), styles.tac]
                    }}
                >
                    {i18n.t(`auth.cwf.info`)}
                </Animated.Text>
                {Gap({ size: 27.528 })}
                <Animated.View
                    {...{
                        style: [fw, padding('h', 27.528)]
                    }}
                >
                    <Animated.View
                        {...{
                            style: [fw, height(57.35), borderRadius("", 13.752), isDarkMode ? backgroundColor(colors.loginFieldBg) : [borderColor("", colors.text2), bw1], styles.fdr]
                        }}
                    >
                        <Animated.View
                            {...{
                                style: [f1, padding("h", 22.94), styles.jcc]
                            }}
                        >
                            <Animated.Text
                                {...{
                                    style: [fontSize(18), color(colors.text1), styles.foWe8]
                                }}
                            >
                                + {PhoneNumber.split('').map((n) => i18n.t(`auth.keypad["${n}"]`)).join('')}
                            </Animated.Text>
                        </Animated.View>
                        <SimpleButton
                            {...{
                                bg: colors.primary,
                                color: colors.white,
                                text: i18n.t(`auth.cwf.continue`),
                                onPress: verifyPhone
                            }}
                        />
                    </Animated.View>
                </Animated.View>
                {Gap({ size: 27.528 })}
                <Keypad {...{ PhoneNumber, setPhoneNumber, max: MaxNumbers }} />
            </Animated.View>
        </Animated.View>
    )
}