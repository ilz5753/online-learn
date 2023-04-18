import { isEmpty } from "lodash";
import { useEffect, useRef, useState } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, f1, fontSize, fw, height, padding, squareLayout, styles } from "../../../common/style";
import { AII, ATI, ATO } from "../../animatedComponents";
import { Gap } from "../../gap";
import { ISearchBar } from "./type";

export function SearchBar({ isLink = true, text = "", setText, label = "Some Text", onLinkPress, onFilterPress }: ISearchBar) {
    let ref = useRef<any>();
    let { theme: { colors } } = useTheme();
    let [value, setValue] = useState("");
    let onChangeText = (t: string) => {
        setValue(t);
        if (setText) setText(t);
    };
    let clearInput = () => onChangeText("");
    let focusInput = () => ref.current?.focus();
    useEffect(() => {
        setValue(text);
    }, [text]);
    return (
        <Animated.View
            {...{
                style: [fw, height(55.056), backgroundColor(colors.searchBarBg), borderRadius("", 13.764), styles.fdr, styles.aic, padding("h", 18.352)]
            }}
        >
            <ATO
                {...{
                    style: [squareLayout(24), styles.center],
                    activeOpacity: 0.84,
                    onPress: focusInput,
                    disabled: isLink
                }}
            >
                <AII
                    {...{
                        name: `ios-search`,
                        size: 21,
                        color: colors.text3
                    }}
                />
            </ATO>
            <Animated.View
                {...{
                    style: [f1, padding("h", 6.882), isLink ? [styles.aiFs] : [styles.fdr],]
                }}
            >
                {isLink ? (
                    <ATO
                        {...{
                            style: [f1, styles.jcc],
                            activeOpacity: 0.84,
                            onPress: onLinkPress,
                        }}
                    >
                        <Animated.Text
                            {...{
                                style: [fontSize(17.6), color(colors.text3)]
                            }}
                        >
                            {label}
                        </Animated.Text>
                    </ATO>
                ) : (
                    <>
                        <ATI
                            {...{
                                ref,
                                style: [f1, fontSize(17.6), color(colors.text1)],
                                value,
                                onChangeText,
                                placeholder: label,
                                placeholderTextColor: colors.text3,
                            }}
                        />
                        {Gap({ type: "l", size: 13.764 })}
                        <ATO
                            {...{
                                style: [squareLayout(27.528), styles.center],
                                disabled: isEmpty(value),
                                onPress: clearInput,
                                activeOpacity: 0.84,
                            }}
                        >
                            {!isEmpty(value) && (
                                <AII
                                    {...{
                                        name: `ios-close-circle`,
                                        size: 24,
                                        color: colors.text3,
                                        entering: FadeIn,
                                        exiting: FadeOut
                                    }}
                                />
                            )}
                        </ATO>
                    </>
                )}
            </Animated.View>
            <ATO
                {...{
                    style: [squareLayout(27.528), styles.center],
                    onPress: onFilterPress,
                    activeOpacity: 0.84
                }}
            >
                <AII
                    {...{
                        name: `ios-options-outline`,
                        size: 25,
                        color: colors.text3
                    }}
                />
            </ATO>
        </Animated.View>
    )
}