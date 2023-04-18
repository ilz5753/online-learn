import { useNavigation } from '@react-navigation/native';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { isEmpty, isEqual } from 'lodash';
import { useState } from "react";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from '../../../../common/store/contexts/language';
import { useTheme } from "../../../../common/store/contexts/theme";
import { borderRadius, color, fontSize, padding, squareLayout, styles } from "../../../../common/style";
import { ATO } from "../../../../components/animatedComponents";
import { SettingsRow } from '../../../../components/extra/settingsRow';
import { ISettingsRow } from '../../../../components/extra/settingsRow/type';
import { Avatar64Logo } from "../../../../components/extra/svgs/avatar64";
import { Gap } from "../../../../components/gap";
import { Layout } from "../../../../components/layout";
import { ScrollView } from '../../../../components/scrollview';
export default function SettingsOverview() {
    let insets = useSafeAreaInsets()
    let { navigate } = useNavigation()
    let { theme: { colors } } = useTheme()
    let [profilePic, setProfilePic] = useState("");
    let selectProfilePic = async () => {
        let result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setProfilePic(result.assets[0].uri);
        }
    }
    let profilePicSize = 73.604;
    let rows: ISettingsRow[] = [
        {
            id: `0`,
            text: i18n.t(`main.Account.favorites`),
            onPress: () => navigate("Favorites")
        },
        {
            id: `1`,
            text: i18n.t(`main.Account.editAccount`),
            onPress: () => navigate("EditAccount")
        },
        {
            id: `2`,
            text: i18n.t(`main.Account.settingsAndPrivacy`),
            onPress: () => navigate("SettingsAndPrivacy")
        },
        {
            id: `3`,
            text: i18n.t(`main.Account.help`),
            onPress: () => navigate("Help")
        },
    ];
    return (
        <Layout>
            {Gap({ size: insets.top + 13.764 })}
            <Animated.View
                {...{
                    style: [padding('h', 22.94), styles.aiFs]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(27.528), color(colors.text1), styles.foWe8]
                    }}
                >
                    {i18n.t(`main.Account.title`)}
                </Animated.Text>
            </Animated.View>
            {Gap({ size: 27.528 })}
            <Animated.View
                {...{
                    style: [styles.aic]
                }}
            >
                <ATO
                    {...{
                        style: [squareLayout(profilePicSize)],
                        onPress: selectProfilePic,
                        activeOpacity: 0.84,
                    }}
                >
                    {isEmpty(profilePic) ? (
                        <Avatar64Logo />
                    ) : (
                        <Animated.Image
                            {...{
                                source: {
                                    uri: profilePic
                                },
                                style: [squareLayout(profilePicSize), borderRadius('', profilePicSize / 2)]
                            }}
                        />
                    )}
                </ATO>
            </Animated.View>
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