import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import Animated from "react-native-reanimated";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fontSize, fw, height, styles, width } from "../../../common/style";
import { ATO } from "../../animatedComponents";
import { Gap } from "../../gap";

export function MessageTopTabBar({ state, descriptors, navigation, position }: MaterialTopTabBarProps) {
    let { theme: { colors } } = useTheme()
    return (
        <Animated.View
            {...{
                style: [fw, height(37.851), backgroundColor(colors.bg), styles.fdr, styles.aic, styles.jcSe]
            }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <ATO
                        {...{
                            key: route.key,
                            accessibilityRole: "button",
                            accessibilityState: isFocused ? { selected: true } : {},
                            accessibilityLabel: options.tabBarAccessibilityLabel,
                            testID: options.tabBarTestID,
                            onPress: onPress,
                            onLongPress: onLongPress,
                            style: [styles.jcSb, styles.aic],
                            activeOpacity: 0.81
                        }}
                    >
                        <Animated.Text
                            {...{
                                style: [color(colors.text1), fontSize(18.352), isFocused && styles.foWe8]
                            }}
                        >
                            {i18n.t(`main.Message.topTab["${route.name}"]`)}
                        </Animated.Text>
                        {Gap({ size: 8.029 })}
                        <Animated.View
                            {...{
                                style: [width(48.174), height(2.294), borderRadius("", 1.147), isFocused && backgroundColor(colors.primary)]
                            }}
                        />
                    </ATO>
                );
            })}

        </Animated.View >
    )
}