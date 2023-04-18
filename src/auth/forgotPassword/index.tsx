import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAndroidNavigationBar } from "../../../common/hooks/androidNavigationBar";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, f1, full, padding } from "../../../common/style";
import { isRTL } from "../../../common/utils/dir";
import { AII } from "../../../components/animatedComponents";
import { SimpleButton } from "../../../components/buttons/simple";
import { AuthDoYouQuestion } from "../../../components/common";
import { Gap } from "../../../components/gap";
import { IOSHeader } from "../../../components/headers/ios";
import { AuthField } from '../../../components/inputs/authField';
import { ScrollView } from "../../../components/scrollview";
export default function ForgotPassword() {
    let { theme: { colors } } = useTheme();
    let insets = useSafeAreaInsets()
    let { navigate, goBack } = useNavigation();
    useAndroidNavigationBar(colors.loginFormBg)
    let signUp = () => navigate("SignUp");
    let goHome = () => navigate("Main");
    return (
        <Animated.View
            {...{
                style: [full, backgroundColor(colors.loginBg)]
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
            {Gap({ size: 22.94 })}
            <Animated.View
                {...{
                    style: [f1, borderRadius("t", 29), backgroundColor(colors.loginFormBg)]
                }}
            >
                <ScrollView
                    {...{
                        style: [padding("h", 24),]
                    }}
                >
                    {Gap({ size: 36.704 })}
                    <AuthField
                        {...{
                            label: i18n.t(`auth.login.fields.email`),
                        }}
                    />
                    {Gap({ size: 16.058 })}
                    <SimpleButton
                        {...{
                            bg: colors.primary,
                            color: colors.white,
                            text: i18n.t(`auth.login.login`),
                            onPress: goHome
                        }}
                    />
                    {Gap({ size: 27.528 })}
                    <AuthDoYouQuestion
                        {...{
                            question: {
                                text: i18n.t(`auth.login.dhaa.text`),
                                color: colors.text2,
                            },
                            link: {
                                text: i18n.t(`auth.login.dhaa.link`),
                                color: colors.primary,
                                onPress: signUp,
                            }
                        }}
                    />
                    {Gap({ size: 27.528 })}
                </ScrollView>
            </Animated.View>
        </Animated.View>
    )
}