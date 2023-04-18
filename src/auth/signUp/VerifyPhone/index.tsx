import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAndroidNavigationBar } from "../../../../common/hooks/androidNavigationBar";
import i18n from "../../../../common/store/contexts/language";
import { useTheme } from "../../../../common/store/contexts/theme";
import { backgroundColor, borderColor, borderRadius, bw1, color, fontSize, full, fw, height, padding, styles } from "../../../../common/style";
import { isRTL } from "../../../../common/utils/dir";
import { AII } from "../../../../components/animatedComponents";
import { SimpleButton } from "../../../../components/buttons/simple";
import { AuthDoYouQuestion } from "../../../../components/common";
import { AuthResultModal } from "../../../../components/extra/authResultModal";
import { Keypad } from "../../../../components/extra/keypad";
import { Gap } from "../../../../components/gap";
import { IOSHeader } from "../../../../components/headers/ios";
import { List } from "../../../../components/list";

let MaxNumbers = 4;
export default function VerifyPhone() {
    let { theme: { colors }, isDarkMode } = useTheme();
    let { params } = useRoute()
    let insets = useSafeAreaInsets()
    let [Code, setCode] = useState("1234");
    let [SuccessModal, setSuccessModal] = useState(false);
    let [FailModal, setFailModal] = useState(false);
    let { navigate, goBack } = useNavigation();
    useAndroidNavigationBar(colors.loginFormBg, !SuccessModal && !FailModal);
    let toggleSuccessModal = () => setSuccessModal(s => !s);
    let toggleFailModal = () => setFailModal(f => !f);
    let requestCode = () => { };
    let verifyAndCreateAccount = () => {
        // check if code is valid
        if (Code === "1234")
            toggleSuccessModal();
        else toggleFailModal()
    };
    let goHome = () => {
        navigate("Main")
    }
    return (
        <Animated.View
            {...{
                style: [full, backgroundColor(colors.loginFormBg)]
            }}
        >
            {Gap({ size: insets.top })}
            <IOSHeader
                {...{
                    title: i18n.t(`auth.vf.title`),
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
            {Gap({ size: 73.408 })}
            <Animated.Text
                {...{
                    style: [fontSize(18), color(colors.text2), styles.tac]
                }}
            >
                {`${i18n.t(`auth.vf.message`)} + ${params?.PhoneNumber?.split('')?.map((n: string) => i18n.t(`auth.keypad["${n}"]`))?.join('')}`}
            </Animated.Text>
            {Gap({ size: 34.41 })}
            {List({
                data: Array(MaxNumbers).fill("").map((_, id) => ({ id, text: Code[id] })),
                Render({ item: { text }, width }) {
                    return (
                        <Animated.View
                            {...{
                                style: [{ width }, height(57.35), styles.center, borderRadius('', 8), isDarkMode ? backgroundColor(colors.loginFieldBg) : [borderColor("", colors.text2), bw1]]
                            }}
                        >
                            <Animated.Text
                                {...{
                                    style: [fontSize(22), styles.foWe6, color(colors.text1)]
                                }}
                            >
                                {text ? i18n.t(`auth.keypad["${text}"]`) : ""}
                            </Animated.Text>
                        </Animated.View>
                    )
                },
                numColumns: MaxNumbers,
                spaces: {
                    horizontal: 66.526,
                    betweenItems: 27.528, // change this if you change MaxNumber
                }
            })}
            {Gap({ size: 36.704 })}
            <AuthDoYouQuestion
                {...{
                    question: {
                        text: i18n.t(`auth.vf.drc.text`),
                        color: colors.text2,
                    },
                    link: {
                        text: i18n.t(`auth.vf.drc.link`),
                        color: colors.primary,
                        onPress: requestCode
                    },
                }}
            />
            {Gap({ size: 50.468 })}
            <Animated.View
                {...{
                    style: [fw, height(57.35), padding("h", 69.967)]
                }}
            >
                <SimpleButton
                    {...{
                        bg: colors.primary,
                        color: colors.white,
                        text: i18n.t(`auth.vf.verify`),
                        onPress: verifyAndCreateAccount
                    }}
                />
            </Animated.View>
            {Gap({ size: 50.468 })}
            <Keypad {...{ PhoneNumber: Code, setPhoneNumber: setCode, max: MaxNumbers }} />
            {SuccessModal && (
                <AuthResultModal
                    {...{
                        title: i18n.t(`auth.vf.resultModals.success.title`),
                        description: i18n.t(`auth.vf.resultModals.success.description`),
                        success: true,
                        successText: i18n.t(`auth.vf.resultModals.success.btnText`),
                        onPress: goHome,
                        closeModal: toggleSuccessModal,
                    }}
                />
            )}
            {FailModal && (
                <AuthResultModal
                    {...{
                        title: i18n.t(`auth.vf.resultModals.failure.title`),
                        description: i18n.t(`auth.vf.resultModals.failure.description`),
                        success: false,
                        failText: i18n.t(`auth.vf.resultModals.failure.btnText`),
                        onPress: toggleFailModal,
                        closeModal: toggleFailModal,
                    }}
                />
            )}
        </Animated.View>
    )
}