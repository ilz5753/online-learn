import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { color, fontSize, padding, styles } from "../../../common/style";
import { Gap } from "../../../components/gap";
import { Layout } from "../../../components/layout";
import MessagesTopTab from "./topTab";

export default function Message() {
    let insets = useSafeAreaInsets()
    let { theme: { colors } } = useTheme()
    return (
        <Layout>
            {Gap({ size: insets.top })}
            {Gap({ size: 18.352 })}
            <Animated.View
                {...{
                    style: [styles.aiFs, padding("h", 22.94)]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(27.528), color(colors.text1), styles.foWe8]
                    }}
                >
                    {i18n.t(`main.Message.title`)}
                </Animated.Text>
            </Animated.View>
            {Gap({ size: 18.352 })}
            <MessagesTopTab />
        </Layout>
    )
}