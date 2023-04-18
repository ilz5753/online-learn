import { useLinkTo, useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAndroidNavigationBar } from "../../../common/hooks/androidNavigationBar";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, f1, fontSize, full, fw, padding, styles } from "../../../common/style";
import { ATO } from "../../../components/animatedComponents";
import { SimpleButton } from "../../../components/buttons/simple";
import { AuthDoYouQuestion, AuthOr } from "../../../components/common";
import { AuthViaSSO } from "../../../components/extra/authViaSSO";
import { FacebookLogo } from "../../../components/extra/svgs/facebookLogo";
import { GoogleLogo } from "../../../components/extra/svgs/googleLogo";
import { Gap } from "../../../components/gap";
import { TitleHeader } from "../../../components/headers/title";
import { AuthField } from '../../../components/inputs/authField';
import { ScrollView } from "../../../components/scrollview";
export default function Login() {
    let { theme: { colors } } = useTheme();
    let insets = useSafeAreaInsets()
    let { navigate } = useNavigation();
    let linkTo = useLinkTo();
    useAndroidNavigationBar(colors.loginFormBg)
    let forgotPassword = () => navigate("ForgotPassword");
    let phone = () => linkTo("/Auth/SignUp/Phone");
    let signUp = () => navigate("SignUp");
    let goHome = () => navigate("Main");
    let accounts = [
        {
            Svg: GoogleLogo,
            // onPress: 
        },
        {
            Svg: FacebookLogo,
            // onPress: 
        },
    ]
    return (
        <Animated.View
            {...{
                style: [full, backgroundColor(colors.loginBg)]
            }}
        >
            {Gap({ size: insets.top })}
            {Gap({ size: 91.76 - insets.top })}
            <TitleHeader
                {...{
                    title: i18n.t(`auth.login.title`),
                    paddingHorizontal: 27.528
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
                    {Gap({ size: 27.528 })}
                    <AuthField
                        {...{
                            label: i18n.t(`auth.login.fields.password`),
                            isPassword: true
                        }}
                    />
                    {Gap({ size: 13.764 })}
                    <Animated.View
                        {...{
                            style: [fw, styles.fdr, styles.aic, styles.jcSb],
                        }}
                    >
                        <ATO
                            {...{
                                onPress: phone,
                                activeOpacity: 0.84
                            }}
                        >
                            <Animated.Text
                                {...{
                                    style: [fontSize(15), color(colors.text2)]
                                }}
                            >
                                {i18n.t(`auth.login.fields.cwp`)}
                            </Animated.Text>
                        </ATO>
                        <ATO
                            {...{
                                onPress: forgotPassword,
                                activeOpacity: 0.84
                            }}
                        >
                            <Animated.Text
                                {...{
                                    style: [fontSize(15), color(colors.text2)]
                                }}
                            >
                                {i18n.t(`auth.login.fields.fp`)}
                            </Animated.Text>
                        </ATO>
                    </Animated.View>
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
                    <AuthOr
                        {...{
                            text: i18n.t(`auth.login.or`),
                            bg: colors.loginFormBg,
                            paddingHorizontal: 25.8075,
                            textColor: colors.text2
                        }}
                    />
                    {Gap({ size: 27.528 })}
                    <Animated.View
                        {...{
                            style: [styles.aic]
                        }}
                    >
                        <AuthViaSSO
                            {...{
                                accounts,
                            }}
                        />
                    </Animated.View>
                    {Gap({ size: 27.528 })}
                </ScrollView>
            </Animated.View>
        </Animated.View>
    )
}