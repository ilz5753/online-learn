import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useIsFocused } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { useActiveKeyboard } from "../../../common/hooks/activeKeyboard";
import { useAndroidNavigationBar } from "../../../common/hooks/androidNavigationBar";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fh, fontSize, fw, height, isIos, margin, padding, squareLayout, styles, top, transparent } from "../../../common/style";
import { hexToRGBA } from "../../../common/utils/colorConverts";
import { ATO } from "../../animatedComponents";
import { Gap } from "../../gap";

export function MainBottomTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
    let { theme: { colors } } = useTheme()
    let isFocused = useIsFocused()
    let activeKeyboard = useActiveKeyboard()
    let bgc = backgroundColor(colors.bg);
    useAndroidNavigationBar(colors.bg, isFocused);
    let length = state.routeNames.length;
    let deActiveColor = colors.text3;
    let middleBgColor = hexToRGBA(colors.primary, 0.05);
    let activeColor = colors.primary;
    return (
        <Animated.View
            {...{
                style: [fw, bgc]
            }}
        >
            <Animated.View
                {...{
                    style: [fw, height(67.673), padding("h", 35.557), borderRadius("t", 27.528), styles.fdr, styles.jcSb, isIos && !activeKeyboard && margin('b', insets.bottom)]
                }}
            >
                {state.routes.map((route, index) => {
                    let active = state.index === index;
                    const { options: { tabBarIcon, tabBarTestID, tabBarAccessibilityLabel } } = descriptors[route.key];
                    let Color = active ? activeColor : deActiveColor;
                    const onPress = () => {
                        navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
                        navigation.navigate({ name: route.name, merge: true });
                    };
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                        navigation.navigate({ name: route.name, merge: true });
                    };
                    let isMiddle = index === Math.floor(length / 2);
                    return (
                        <ATO
                            {...{
                                key: route.key,
                                accessibilityRole: "button",
                                testID: tabBarTestID,
                                accessibilityState: active ? { selected: true } : {},
                                accessibilityLabel: tabBarAccessibilityLabel,
                                activeOpacity: isMiddle ? 1 : 0.75,
                                disabled: active,
                                style: [styles.jcSb, styles.aic, padding("h", 6), fh, isMiddle && [padding("v", 6), borderRadius("", 35), top(-12), bgc]],
                                onPress,
                                onLongPress,
                            }}
                        >
                            {isMiddle ? (
                                <Animated.View
                                    {...{
                                        style: [squareLayout(58), borderRadius("", 29), backgroundColor(middleBgColor), styles.center]
                                    }}
                                >
                                    {tabBarIcon && tabBarIcon({ focused: active, color: Color, size: 22.94 })}
                                </Animated.View>
                            ) : (
                                <>
                                    <Animated.View
                                        {...{
                                            style: [fw, height(2.294), borderRadius('', 1.147), backgroundColor(active ? colors.primary : transparent)]
                                        }}
                                    />
                                    {tabBarIcon && tabBarIcon({ focused: active, color: Color, size: 20.646 })}
                                </>
                            )}
                            <Animated.Text
                                {...{
                                    style: [fontSize(12.617), color(Color), styles.foWe6]
                                }}
                            >
                                {i18n.t(`main.bottomTabs["${route.name}"]`)}
                            </Animated.Text>
                        </ATO>
                    )
                })}
            </Animated.View>
            {Gap({ size: 8 })}
        </Animated.View>
    )
}