import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import { backgroundColor, borderRadius, fontSize, fw, height, maxWidth, padding, styles } from "../../../common/style";
import { Gap } from "../../gap";
import { IMeetup } from "./type";

export default function Meetup({ color, title, subtitle, Logo }: IMeetup) {
    let { width } = useWindowDimensions()
    return (
        <Animated.View
            {...{
                style: [fw, height(137.64), borderRadius('', 13.674), styles.fdr, styles.aic, styles.jcSb, padding('h', 15.851), backgroundColor("#efe0ff")]
            }}
        >
            <Animated.View
                {...{
                    style: [styles.aiFs, maxWidth(0.5759 * width)]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(27.941), { color }, styles.foWe7, styles.tal]
                    }}
                >
                    {title}
                </Animated.Text>
                {Gap({ size: 3.441 })}
                <Animated.Text
                    {...{
                        style: [fontSize(13.764), { color }, styles.tal]
                    }}
                >
                    {subtitle}
                </Animated.Text>
            </Animated.View>
            <Logo />
        </Animated.View>
    )
}