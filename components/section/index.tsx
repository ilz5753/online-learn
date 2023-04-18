import Animated from "react-native-reanimated";
import { useTheme } from "../../common/store/contexts/theme";
import { color, fontSize, padding, styles } from "../../common/style";
import { ATO } from "../animatedComponents";
import { Gap } from "../gap";
import { ISectionHeader } from "./type";

export function SectionHeader({ title, subtitle, moreBtn }: ISectionHeader) {
    let { theme: { colors } } = useTheme()
    return (
        <Animated.View
            {...{
                style: [styles.fdr, styles.aic, styles.jcSb, padding('v', 16.508)],
            }}
        >
            <Animated.View
                {...{
                    style: [styles.jcc]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(20.646), color(colors.text1), styles.foWe6]
                    }}
                >
                    {title}
                </Animated.Text>
                {subtitle && (
                    <>
                        {Gap({ size: 4.588 })}
                        <Animated.Text
                            {...{
                                style: [fontSize(16.058), color(colors.text2), styles.foWe4]
                            }}
                        >
                            {subtitle}
                        </Animated.Text>
                    </>
                )}
            </Animated.View>
            {moreBtn && (
                <ATO
                    {...{
                        onPress: moreBtn.onPress,
                        disabled: moreBtn.disabled,
                    }}
                >
                    <Animated.Text
                        {...{
                            style: [fontSize(16.058), color(moreBtn.color), styles.foWe5]
                        }}
                    >
                        {moreBtn.text}
                    </Animated.Text>
                </ATO>
            )}
        </Animated.View>
    )
}