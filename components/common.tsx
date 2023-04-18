import Animated from "react-native-reanimated";
import { backgroundColor, color, fontSize, fw, height, padding, styles } from "../common/style";
import { ATO } from "./animatedComponents";
import { Gap } from "./gap";
import { IAuthDoYouQuestion, IAuthOr } from './type';
export function AuthOr({ text, bg, textColor, paddingHorizontal = 0 }: IAuthOr) {
    let bgc = backgroundColor(bg);
    return (
        <Animated.View
            {...{
                style: [fw, styles.center, height(19.5), bgc]
            }}
        >
            <Animated.View
                {...{
                    style: [fw, height(1), backgroundColor(textColor)]
                }}
            />
            <Animated.View
                {...{
                    style: [styles.overlay, bgc, padding("h", paddingHorizontal)]
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(12), color(textColor),]
                    }}
                >
                    {text}
                </Animated.Text>
            </Animated.View>
        </Animated.View>
    )
}
export function Empty() {
    return (
        <></>
    )
}
export function AuthDoYouQuestion({ question, link }: IAuthDoYouQuestion) {
    return (
        <Animated.View
            {...{
                style: [fw, styles.fdr, styles.center],
            }}
        >
            <Animated.Text
                {...{
                    style: [fontSize(14), color(question.color)]
                }}
            >
                {question.text}
            </Animated.Text>
            {Gap({ type: "l", size: 6 })}
            <ATO
                {...{
                    onPress: link.onPress,
                    activeOpacity: 0.84
                }}
            >
                <Animated.Text
                    {...{
                        style: [fontSize(14), color(link.color)]
                    }}
                >
                    {link.text}
                </Animated.Text>
            </ATO>
        </Animated.View>
    )
}