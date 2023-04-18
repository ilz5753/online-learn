import { useNavigation, useRoute } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../../../common/store/contexts/theme";
import { backgroundColor, full, styles } from "../../../../common/style";
import { hexToRGBA } from "../../../../common/utils/colorConverts";
import { isRTL } from "../../../../common/utils/dir";
import { AII } from "../../../../components/animatedComponents";
import { Gap } from "../../../../components/gap";
import { IOSHeader } from "../../../../components/headers/ios";

export default function CourseDetails() {
    let { params } = useRoute();
    let { goBack } = useNavigation();
    let insets = useSafeAreaInsets();
    let { theme: { colors } } = useTheme();
    let bgc = hexToRGBA(params?.data?.to, 0.1);
    return (
        <Animated.View
            {...{
                style: [full, backgroundColor(bgc)]
            }}
        >
            <Animated.View
                {...{
                    style: [styles.overlay, full]
                }}
            >
                {Gap({ size: insets.top })}
                <IOSHeader
                    {...{
                        leftButton: {
                            activeOpacity: 0.84,
                            onPress: goBack,
                            children: (
                                <AII
                                    {...{
                                        name: `chevron-${isRTL() ? "forward" : "back"}`,
                                        color: colors.text1,
                                        size: 27.528
                                    }}
                                />
                            )
                        }
                    }}
                />
                <Animated.View
                    {...{
                        style: []
                    }}>
                </Animated.View>
            </Animated.View>
        </Animated.View>
    )
}