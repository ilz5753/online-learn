import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import { backgroundColor, borderRadius, bottom, fontSize, fw, height, layout, left, padding, right, styles, top } from "../../../common/style";
import { IRecommendation } from "./type";
import { ATO } from "../../animatedComponents";

export function Recommendation({ Svg, title, bg, color, onPress, disabled }: IRecommendation) {
    let { width } = useWindowDimensions()
    return (
        <ATO
            {...{
                style: [layout(width * 0.426, 123.876), styles.jcFe],
                activeOpacity: 0.84,
                onPress,
                disabled
            }}
        >
            <Animated.View
                {...{
                    style: [fw, height(88.846), backgroundColor(bg), borderRadius("", 13.712)]
                }}
            />
            <Animated.View
                {...{
                    style: [styles.overlay, left(0), top(0), {transform: [{scale: 1.3}]}]
                }}
            >
                <Svg />
            </Animated.View>
            <Animated.View
                {...{
                    style: [height(27.424), right(0), bottom(10.483), padding("h", 6), backgroundColor(`#f3fbff`), styles.overlay, borderRadius("l", 13.712), styles.center]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(14), { color }, styles.foWe7]
                    }}
                >
                    {title}
                </Animated.Text>
            </Animated.View>
        </ATO>
    );
}