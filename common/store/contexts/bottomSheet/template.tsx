import { FadeIn, FadeOut, SlideInDown, SlideOutDown } from "react-native-reanimated";
import { ATO } from "../../../../components/animatedComponents";
import { backgroundColor, borderRadius, bottom, full, fw, padding, styles } from "../../../style";
import { hexToRGBA } from "../../../utils/colorConverts";
import { noop } from "../../../utils/funcs";
import { useTheme } from "../theme";
import { dark } from "../theme/themes/dark";
import { IBottomSheetData } from "./type";

export function BottomSheetTemplate({ Header, Main, Footer, id, ctx: { hide } }: IBottomSheetData) {
    let { theme: { colors } } = useTheme()
    let dismiss = () => hide({ id });
    return (
        <ATO
            {...{
                style: [full, styles.overlay, backgroundColor(hexToRGBA(dark.colors.bg, 0.7))],
                entering: FadeIn,
                exiting: FadeOut,
                activeOpacity: 1,
                onPress: dismiss
            }}
        >
            <ATO
                {...{
                    style: [fw, backgroundColor(colors.loginFormBg), styles.overlay, bottom(0), borderRadius("t", 27.528), padding("v", 18.352)],
                    entering: SlideInDown,
                    exiting: SlideOutDown,
                    activeOpacity: 1,
                    onPress: noop
                }}
            >
                {Header && (
                    <Header {...{ id }} />
                )}
                <Main {...{ id }} />
                {Footer && (
                    <Footer {...{ id }} />
                )}
            </ATO>
        </ATO>
    )
}