import { PropsWithChildren } from "react";
import Animated from "react-native-reanimated";
import { useAndroidNavigationBar } from "../common/hooks/androidNavigationBar";
import { useTheme } from "../common/store/contexts/theme";
import { backgroundColor, bw1, color, f1, fontSize, full, height, minWidth, padding, squareLayout, styles } from "../common/style";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { IOSHeader } from "./headers/ios";
import { AII } from "./animatedComponents";
import { isRTL } from "../common/utils/dir";
import { Gap } from "./gap";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SimpleButton } from "./buttons/simple";
import { IEmptyLayout } from "./type";
import { useWindowDimensions } from "react-native";
export function Layout({ children }: PropsWithChildren) {
    let {
        theme: {
            colors: {
                bg
            }
        }
    } = useTheme()
    let isFocused = useIsFocused();
    useAndroidNavigationBar(bg, isFocused);
    return (
        <Animated.View
            {...{
                style: [full, backgroundColor(bg)],
            }}
        >
            {children}
        </Animated.View>
    );
}
export function EmptyLayout({ canGoBack, Svg, message, title, forwardBtn }: IEmptyLayout) {
    let dimension = useWindowDimensions()
    let {
        theme: {
            colors,
        }
    } = useTheme()
    let insets = useSafeAreaInsets()
    let { goBack } = useNavigation()
    let onBackPress = () => {
        if (canGoBack) goBack()
    }
    return (
        <Layout>
            {Gap({ size: insets.top })}
            <IOSHeader
                {...{
                    leftButton: {
                        activeOpacity: 0.84,
                        onPress: onBackPress,
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
            <Animated.View
                {...{
                    style: [styles.aic]
                }}
            >
                {Gap({ size: 119.288 })}
                <Animated.View
                    {...{
                        style: [squareLayout(dimension.width * 0.4266), styles.center]
                    }}
                >
                    <Svg />
                </Animated.View>
                {Gap({ size: 5.735 })}
                <Animated.Text
                    {...{
                        style: [fontSize(18.352), styles.foWe6, color(colors.text1), styles.tac]
                    }}
                >
                    {title}
                </Animated.Text>
                {Gap({ size: 27.528 })}
                <Animated.Text
                    {...{
                        style: [fontSize(13.764), color(colors.text2), styles.tac]
                    }}
                >
                    {message}
                </Animated.Text>
                {forwardBtn && (
                    <>
                        {Gap({ size: 27.528 })}
                        <Animated.View
                            {...{
                                style: [height(57.35), minWidth(120)]
                            }}
                        >
                            <SimpleButton
                                {...{
                                    bg: colors.primary,
                                    color: colors.white,
                                    ...forwardBtn
                                }}
                            />
                        </Animated.View>
                    </>
                )}
            </Animated.View>
        </Layout>
    )
}