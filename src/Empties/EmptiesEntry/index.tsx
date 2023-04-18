import { useNavigation } from "@react-navigation/native";
import { isEqual } from "lodash";
import { ScrollView } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { padding } from "../../../common/style";
import { isRTL } from "../../../common/utils/dir";
import { AII } from "../../../components/animatedComponents";
import { SettingsRow } from "../../../components/extra/settingsRow";
import { ISettingsRow } from "../../../components/extra/settingsRow/type";
import { Gap } from "../../../components/gap";
import { IOSHeader } from "../../../components/headers/ios";
import { Layout } from "../../../components/layout";

export default function EmptiesEntry() {
    let insets = useSafeAreaInsets();
    let { goBack, navigate } = useNavigation()
    let { theme: { colors } } = useTheme()
    let rows: ISettingsRow[] = [
        {
            id: `0`,
            text: i18n.t(`empties.pages.noNotifications`),
            onPress: () => navigate("NoNotification")
        },
        {
            id: `1`,
            text: i18n.t(`empties.pages.noNetwork`),
            onPress: () => navigate("NoNetwork")
        },
        {
            id: `2`,
            text: i18n.t(`empties.pages.noVideos`),
            onPress: () => navigate("NoVideo")
        },
        {
            id: `3`,
            text: i18n.t(`empties.pages.noProducts`),
            onPress: () => navigate("NoProduct")
        },
    ];
    return (
        <Layout>
            {Gap({ size: insets.top })}
            <IOSHeader
                {...{
                    title: i18n.t(`empties.title`),
                    leftButton: {
                        activeOpacity: 0.84,
                        onPress: goBack,
                        children: (
                            <AII
                                {...{
                                    name: `chevron-${isRTL() ? "forward" : "back"}`,
                                    size: 27.528,
                                    color: colors.text1
                                }}
                            />
                        )
                    }
                }}
            />
            {Gap({ size: 27.528 })}
            <ScrollView
                {...{
                    style: [padding("h", 22.94)]
                }}
            >
                {rows.map((row, index) => (
                    <Animated.View
                        {...{
                            key: row.id
                        }}
                    >
                        <SettingsRow {...row} />
                        {!isEqual(index, rows.length - 1) && Gap({ size: 13.764 })}
                    </Animated.View>
                ))}
            </ScrollView>
        </Layout>
    )
}