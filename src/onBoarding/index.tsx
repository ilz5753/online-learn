import { useLinkTo } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../../common/store/contexts/language";
import { Slider1Logo } from "../../components/extra/svgs/onBoarding/slider1";
import { Slider2Logo } from "../../components/extra/svgs/onBoarding/slider2";
import { Slider3Logo } from "../../components/extra/svgs/onBoarding/slider3";
import { Gap } from "../../components/gap";
import { Layout } from "../../components/layout";
import { OnBoardingSlider } from "../../components/sliders/onBoarding";
export default function OnBoarding() {
    let insets = useSafeAreaInsets();
    let linkTo = useLinkTo();
    let login = () => linkTo("/Auth/LogIn");
    let signUp = () => linkTo("/Auth/SignUp");
    return (
        <Layout>
            <Gap
                {...{
                    size: insets.top
                }}
            />
            <OnBoardingSlider
                {...{
                    data: [
                        {
                            id: "0",
                            // source: require("../../assets/slider1.jpg"),
                            Svg: Slider1Logo,
                            title: i18n.t(`onBoarding.screen1.title`),
                            description: i18n.t(`onBoarding.screen1.description`),
                        },
                        {
                            id: "1",
                            // source: require("../../assets/slider2.jpg"),
                            Svg: Slider2Logo,
                            title: i18n.t(`onBoarding.screen2.title`),
                            description: i18n.t(`onBoarding.screen2.description`),
                        },
                        {
                            id: "2",
                            // source: require("../../assets/slider3.jpg"),
                            Svg: Slider3Logo,
                            title: i18n.t(`onBoarding.screen3.title`),
                            description: i18n.t(`onBoarding.screen3.description`),
                        },
                    ],
                    skipButton: {
                        text: i18n.t(`onBoarding.skip`),
                        onPress: login
                    },
                    loginButton: {
                        text: i18n.t(`onBoarding.login`),
                        onPress: login
                    },
                    signupButton: {
                        text: i18n.t(`onBoarding.signup`),
                        onPress: signUp
                    }
                }}
            />
        </Layout>
    )
}