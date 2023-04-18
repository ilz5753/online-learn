import Animated from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, layout, styles } from "../../../common/style";
import { Gap } from "../../gap";
import { IOnBoardingSliderPagination, IOnBoardingSliderPaginationItem } from "./type";
export function OnBoardingSliderPaginationItem({ isActive }: IOnBoardingSliderPaginationItem) {
    let { theme: { colors: { primary, tertiary } } } = useTheme()
    return (
        <Animated.View
            {...{
                style: [layout(isActive ? 32.088 : 10.314, 5.74), backgroundColor(isActive ? primary : tertiary), borderRadius('', 2.87)]
            }}
        />
    )
}
export function OnBoardingSliderPagination({ paginations, activePage }: IOnBoardingSliderPagination) {
    return (
        <Animated.View
            {...{
                style: [styles.fdr, styles.aic]
            }}
        >
            {paginations.map((key, index) => (
                <Animated.View
                    {...{
                        key,
                        style: [styles.fdr, styles.aic]
                    }}
                >
                    <OnBoardingSliderPaginationItem {...{ isActive: activePage === index }} />
                    {index !== paginations.length - 1 && Gap({ type: "l", size: 11.46 })}
                </Animated.View>
            ))}
        </Animated.View>
    )
}