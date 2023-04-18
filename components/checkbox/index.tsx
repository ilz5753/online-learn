import { FadeIn, FadeOut } from "react-native-reanimated";
import { backgroundColor, borderColor, borderRadius, bw1, squareLayout, styles, transparent } from "../../common/style";
import { AII, ATO } from "../animatedComponents";
import { ICheckBox } from "./type";

export function CheckBox({ size = 21, checked, toggle, activeColor = "white", deActiveBorderColor = "gray", deActiveBg = transparent, activeBg = "purple" }: ICheckBox) {
    return (
        <ATO
            {...{
                style: [squareLayout(size), borderRadius("", size * 0.12), styles.center, backgroundColor(checked ? activeBg : deActiveBg), bw1, borderColor("", checked ? transparent : deActiveBorderColor)],
                onPress: toggle,
                activeOpacity: 0.84
            }}
        >
            {checked && (
                <AII
                    {...{
                        name: `ios-checkmark`,
                        size: size * 0.75,
                        color: activeColor,
                        entering: FadeIn,
                        exiting: FadeOut
                    }}
                />
            )}
        </ATO>
    )
}