import Animated from "react-native-reanimated";
import { backgroundColor, borderRadius, fontSize, padding } from "../../../common/style";
import { ATO } from "../../animatedComponents";
import { ISearchTag } from "./type";

export default function SearchTag({ bg, color, text, onPress, disabled }: ISearchTag) {
    return (
        <ATO
            {...{
                style: [padding('', 11.47), backgroundColor(bg), borderRadius('', 9.176)],
                activeOpacity: 0.84,
                onPress,
                disabled
            }}
        >
            <Animated.Text
                {...{
                    style: [fontSize(13.764), { color }]
                }}
            >
                {text}
            </Animated.Text>
        </ATO>
    )
}