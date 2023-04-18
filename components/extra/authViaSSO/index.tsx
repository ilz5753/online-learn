import Animated from "react-native-reanimated";
import { f1, squareLayout, styles } from "../../../common/style";
import { ATO } from "../../animatedComponents";
import { Gap } from "../../gap";
import { IAuthViaSSO } from "./type";

export function AuthViaSSO({ accounts }: IAuthViaSSO) {
    return (
        <Animated.View
            {...{
                style: [styles.fdr, styles.aic]
            }}
        >
            {accounts.map(({ onPress, Svg }, key) => (
                <Animated.View
                    {...{
                        key,
                        style: [styles.fdr, styles.aic]
                    }}
                >
                    <ATO
                        {...{
                            style: [squareLayout(55.056)],
                            onPress,
                            activeOpacity: 0.84,
                        }}
                    >
                        <Svg />
                    </ATO>
                    {key !== accounts.length - 1 && Gap({ type: "l", size: 36.704 })}
                </Animated.View>
            ))}
        </Animated.View>
    )
}