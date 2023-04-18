import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { borderRadius, color, fontSize, fw, height, lineHeight, padding, squareLayout, styles } from "../../../common/style";
import { isRTLReanimated } from "../../../common/utils/dir";
import { SimpleButton } from "../../buttons/simple";
import { Gap } from "../../gap";
import { IOSHeader } from "../../headers/ios";
import { OnBoardingSliderPagination } from "./pagination";
import { IOnBoardingSlider } from "./type";
export function OnBoardingSlider({ data, skipButton, loginButton, signupButton }: IOnBoardingSlider) {
    let { theme: { colors } } = useTheme()
    let { width } = useWindowDimensions()
    let halfWidth = width / 2;
    let [activePage, setActivePage] = useState(0);
    let z = isRTLReanimated() ? -1 : 1;
    let length = data.length;
    let maxWidth = width * length;
    let translateX = useSharedValue(0);
    let translateXHelp = useSharedValue(0);
    let gesture = Gesture.Pan()
        .onUpdate(({ translationX }) => {
            translateX.value = translationX + translateXHelp.value;
            // console.log(translateX.value);
        })
        .onEnd(() => {
            let tx = translateX.value, ntx = 0, nap = 0;
            // console.log({ tx, })
            for (let i = 0; i < length; i++) {
                // console.log({ i, })
                let firstCond = isRTLReanimated() ? tx < halfWidth : tx > -halfWidth;
                let last = maxWidth - 3 * halfWidth;
                let lastCond = isRTLReanimated() ? tx > last : tx < -last;
                // console.log({ firstCond, lastCond })
                if (i === 0 && firstCond) {
                    ntx = 0;
                    nap = 0;
                }
                else if (i > 0 && i < length - 1) {
                    let prev = -z * i * width;
                    let next = prev - z * width;
                    let cond = isRTLReanimated() ? (tx < next + halfWidth && tx > prev - halfWidth) : (tx > next - halfWidth && tx < prev + halfWidth);
                    if (cond) {
                        ntx = prev;
                        nap = i;
                    }
                }
                else if (i === length - 1 && lastCond) {
                    ntx = -z * (maxWidth - width);
                    nap = length - 1;
                }
            }
            translateX.value = withTiming(ntx);
            translateXHelp.value = ntx;
            runOnJS(setActivePage)(nap);
            // translateXHelp.value = translateX.value;
        });
    let xStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            }
        ]
    }))
    return (
        <Animated.View
            {...{
                style: [styles.ofh]
            }}
        >
            <IOSHeader
                {...{
                    rightButton: (activePage === length - 1) ? undefined : {
                        activeOpacity: 0.84,
                        onPress: skipButton.onPress,
                        entering: FadeIn,
                        exiting: FadeOut,
                        children: (
                            <Animated.Text
                                {...{
                                    style: [fontSize(14), color(colors.text2)]
                                }}
                            >
                                {skipButton.text}
                            </Animated.Text>
                        ),
                    },
                    paddingHorizontal: 15
                }}
            />
            <GestureDetector
                {...{ gesture }}
            >
                <Animated.View
                    {...{
                        style: [xStyle, { width: maxWidth }, styles.fdr]
                    }}
                >
                    {data.map((item) => (
                        <Animated.View
                            {...{
                                key: item.id,
                                style: [{ width }]
                            }}
                        >
                            {Gap({ size: 13.776 })}
                            <Animated.View
                                {...{
                                    style: [fw, height(297.96), styles.aic]
                                }}
                            >
                                {/* <Animated.Image
                                    {...{
                                        source: item.source,
                                        style: [squareLayout(297.96), borderRadius('', 60)]
                                    }}
                                /> */}
                                <item.Svg />
                            </Animated.View>
                            {Gap({ size: 39.02 })}
                            <Animated.View
                                {...{
                                    style: [padding("h", 91.68)]
                                }}
                            >
                                <Animated.Text
                                    {...{
                                        style: [fontSize(22), color(colors.text1), styles.foWe8, styles.tac, lineHeight(32)]
                                    }}
                                >
                                    {item.title}
                                </Animated.Text>
                                {Gap({ size: 22.96 })}
                                <Animated.Text
                                    {...{
                                        style: [fontSize(16), color(colors.text2), styles.tac, lineHeight(24)]
                                    }}
                                >
                                    {item.description}
                                </Animated.Text>
                            </Animated.View>
                        </Animated.View>
                    ))}
                </Animated.View>
            </GestureDetector>
            {Gap({ size: 61.992 })}
            <Animated.View
                {...{
                    style: [fw, styles.aic]
                }}
            >
                <OnBoardingSliderPagination
                    {...{
                        paginations: data.map(({ id }) => id),
                        activePage
                    }}
                />
                {Gap({ size: 61.992 })}
                {activePage === length - 1 && (
                    <Animated.View
                        {...{
                            style: [styles.fdr, styles.aic, padding("h", 22.92)],
                            entering: FadeIn,
                        }}
                    >
                        <SimpleButton
                            {...{
                                bg: colors.primary,
                                color: colors.white,
                                ...signupButton,
                            }}
                        />
                        {Gap({ type: "l", size: 17.19 })}
                        <SimpleButton
                            {...{
                                // bg: isDarkMode ? colors.text2 : transparent,
                                // color: colors[isDarkMode ? "white" : "primary"],
                                bg: colors.text2,
                                color: colors.white,
                                ...loginButton,
                            }}
                        />
                    </Animated.View>
                )}
            </Animated.View>
        </Animated.View>
    )
}