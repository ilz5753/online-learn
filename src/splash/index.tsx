import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Animated from "react-native-reanimated";
import i18n from "../../common/store/contexts/language";
import { useTheme } from "../../common/store/contexts/theme";
import { bottom, color, fontSize, full, styles } from "../../common/style";
import { AAI } from "../../components/animatedComponents";
import { Layout } from "../../components/layout";

export default function Splash() {
    let { theme: { colors: { primary } } } = useTheme();
    let { navigate } = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigate("OnBoarding"); // handle user
        }, 1000);
    }, []);
    return (
        <Layout>
            <Animated.View
                {...{
                    style: [full, styles.overlay, styles.center]
                }}
            >
                <AAI
                    {...{
                        size: "large",
                        color: primary
                    }}
                />
                <Animated.View
                    {...{
                        style: [styles.overlay, bottom(45), styles.aic]
                    }}
                >
                    <Animated.Text
                        {...{
                            style: [fontSize(18), color(primary)]
                        }}
                    >
                        {i18n.t(`splash.slogan`)}
                    </Animated.Text>
                </Animated.View>
            </Animated.View>
        </Layout>
    )
}