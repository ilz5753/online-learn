import Animated from "react-native-reanimated";
import { borderRadius, bw1, color, f1, fontSize, fw, height, padding, squareLayout, styles } from "../../../common/style";
import { ATO } from "../../animatedComponents";
import { IIOSHeader } from "./type";
import { useTheme } from "../../../common/store/contexts/theme";

export function IOSHeader({ leftButton, title, rightButton, paddingHorizontal = 0 }: IIOSHeader) {
    let { theme: { colors } } = useTheme()
    let heightSize = 50.5;
    let btnViewStyle = [squareLayout(heightSize), borderRadius("", heightSize / 2), styles.center]
    return (
        <Animated.View
            {...{
                style: [fw, height(heightSize), styles.fdr, padding("h", paddingHorizontal)]
            }}
        >
            <Animated.View
                {...{
                    style: [btnViewStyle]
                }}
            >
                {leftButton && (
                    <ATO {...leftButton} />
                )}
            </Animated.View>
            <Animated.View
                {...{
                    style: [f1, styles.center]
                }}
            >
                {title && (
                    <Animated.Text
                        {...{
                            style: [fontSize(18), color(colors.text1), styles.foWe5]
                        }}
                    >
                        {title}
                    </Animated.Text>
                )}
            </Animated.View>
            <Animated.View
                {...{
                    style: [btnViewStyle]
                }}
            >
                {rightButton && (
                    <ATO {...rightButton} />
                )}
            </Animated.View>
        </Animated.View>
    )
}