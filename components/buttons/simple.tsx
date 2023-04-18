import { ATO } from "../animatedComponents";
import { ISimpleButton } from "./type";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { f1, height, squareLayout, borderRadius, styles, fontSize, backgroundColor } from "../../common/style";

export function SimpleButton({ bg, color, text, squared, squareSize = 10, icon, onPress, onLongPress, disabled, disabledColor }: ISimpleButton) {
    let br = borderRadius("", squared ? squareSize / 2 : 13.752)
    return (
        <ATO
            {...{
                style: [squared ? [squareLayout(squareSize)] : [f1, height(57.4)], br, styles.center, backgroundColor(bg)],
                onPress,
                onLongPress,
                activeOpacity: 0.84,
                disabled
            }}
        >
            {text && (
                <Animated.Text
                    {...{
                        style: [fontSize(16), { color }, styles.foWe5]
                    }}
                >
                    {text}
                </Animated.Text>
            )}
            {icon && (
                <icon.CMP
                    {...{
                        name: icon.name,
                        size: squareSize * 0.6,
                        color,
                    }}
                />
            )}
            {disabled && (
                <Animated.View {...{ style: [f1, styles.overlay, br, backgroundColor(disabledColor ?? "rgba(0,0,0,0.5)")], entering: FadeIn, exiting: FadeOut }} />
            )}
        </ATO>
    )
}