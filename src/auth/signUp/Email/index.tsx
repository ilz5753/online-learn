import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAndroidNavigationBar } from "../../../../common/hooks/androidNavigationBar";
import i18n from "../../../../common/store/contexts/language";
import { useTheme } from "../../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, f1, fontSize, full, fw, padding, styles } from "../../../../common/style";
import { ATO } from "../../../../components/animatedComponents";
import { SimpleButton } from "../../../../components/buttons/simple";
import { CheckBox } from "../../../../components/checkbox";
import { AuthDoYouQuestion, AuthOr } from "../../../../components/common";
import { AuthViaSSO } from "../../../../components/extra/authViaSSO";
import { FacebookLogo } from "../../../../components/extra/svgs/facebookLogo";
import { GoogleLogo } from "../../../../components/extra/svgs/googleLogo";
import { Gap } from "../../../../components/gap";
import { TitleHeader } from "../../../../components/headers/title";
import { AuthField } from '../../../../components/inputs/authField';
import { ScrollView } from "../../../../components/scrollview";
export default function Email() {
    let { theme: { colors } } = useTheme();
    let insets = useSafeAreaInsets()
    let { navigate } = useNavigation();
    let [agree, setAgree] = useState(false);
    useAndroidNavigationBar(colors.loginFormBg)
    let phone = () => navigate("Phone");
    let login = () => navigate("Login");
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
    let toggleAgreeMent = () => setAgree(a => !a);
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
                    title: i18n.t(`auth.signup.title`),
                    subtitle: i18n.t(`auth.signup.subtitle`),
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
                            label: i18n.t(`auth.signup.fields.email`),
                        }}
                    />
                    {Gap({ size: 27.528 })}
                    <AuthField
                        {...{
                            label: i18n.t(`auth.signup.fields.password`),
                            isPassword: true
                        }}
                    />
                    {Gap({ size: 27.528 })}
                    <AuthField
                        {...{
                            label: i18n.t(`auth.signup.fields.confirmPassword`),
                            isPassword: true
                        }}
                    />
                    {Gap({ size: 13.764 })}
                    <Animated.View
                        {...{
                            style: [fw, styles.aiFe],
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
                                {i18n.t(`auth.signup.fields.cwp`)}
                            </Animated.Text>
                        </ATO>
                    </Animated.View>
                    {Gap({ size: 16.058 })}
                    <Animated.View
                        {...{
                            style: [styles.aiFs, styles.fdr]
                        }}
                    >
                        <CheckBox
                            {...{
                                checked: agree,
                                toggle: toggleAgreeMent,
                                activeBg: colors.primary,
                                activeColor: colors.white,
                                deActiveBorderColor: colors.text2
                            }}
                        />
                        {Gap({ type: "l", size: 8.029 })}
                        <Animated.View
                            {...{
                                style: [f1]
                            }}
                        >
                            <Animated.Text
                                {...{
                                    style: [fontSize(13), color(colors.text2), styles.teDeLiU]
                                }}
                            >
                                {i18n.t(`auth.signup.fields.agreement`)}
                            </Animated.Text>
                        </Animated.View>
                    </Animated.View>
                    {Gap({ size: 16.058 })}
                    <SimpleButton
                        {...{
                            bg: colors.primary,
                            color: colors.white,
                            text: i18n.t(`auth.signup.signup`),
                            disabled: !agree,
                            // disabledColor: colors.disabled
                        }}
                    />
                    {Gap({ size: 27.528 })}
                    <AuthDoYouQuestion
                        {...{
                            question: {
                                text: i18n.t(`auth.signup.ahaa.text`),
                                color: colors.text2,
                            },
                            link: {
                                text: i18n.t(`auth.signup.ahaa.link`),
                                color: colors.primary,
                                onPress: login,
                            }
                        }}
                    />
                    {Gap({ size: 27.528 })}
                    <AuthOr
                        {...{
                            text: i18n.t(`auth.signup.or`),
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
            </Animated.View >
            {/* </ScrollView> */}
        </Animated.View >
    )
}