import { useState } from "react";
import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import { useBottomSheet } from "../../../common/store/contexts/bottomSheet";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { f1, fw, height, padding, styles } from "../../../common/style";
import { ObjToArray } from "../../../common/utils/funcs";
import { RNDId } from "../../../common/utils/id";
import { AII } from "../../../components/animatedComponents";
import { SimpleButton } from "../../../components/buttons/simple";
import { TagList } from "../../../components/extra/SearchTag/tagList";
import { Gap } from "../../../components/gap";
import { RangePan } from "../../../components/gesture/rangePan";
import { IOSHeader } from "../../../components/headers/ios";
import { ScrollView } from "../../../components/scrollview";
import { SectionHeader } from "../../../components/section";
import { IID } from "../../../type";
export const FilterSheetID = RNDId();
// export function FilterHeader({ id }: IID) {
//     let { theme: { colors } } = useTheme()
//     let { hide } = useBottomSheet()
//     let closeSheet = () => hide({ id });
//     return (
//         <IOSHeader
//             {...{
//                 title: `Search Filter`,
//                 leftButton: {
//                     activeOpacity: 0.84,
//                     onPress: closeSheet,
//                     children: (
//                         <AII
//                             {...{
//                                 name: `ios-close`,
//                                 size: 27.528,
//                                 color: colors.text1
//                             }}
//                         />
//                     )
//                 },
//                 paddingHorizontal: 22.94
//             }}
//         />
//     )
// }
export function FilterMain({ id }: IID) {
    let dimension = useWindowDimensions()
    let { theme: { colors } } = useTheme()
    let { hide } = useBottomSheet()
    let [] = useState();
    let closeSheet = () => hide({ id });
    let keypad = i18n.get(`auth.keypad`)
    return (
        <Animated.View>
            <IOSHeader
                {...{
                    title: i18n.t(`main.filterPage.title`),
                    leftButton: {
                        activeOpacity: 0.84,
                        onPress: closeSheet,
                        children: (
                            <AII
                                {...{
                                    name: `ios-close`,
                                    size: 27.528,
                                    color: colors.text1
                                }}
                            />
                        )
                    },
                    paddingHorizontal: 22.94
                }}
            />
            <ScrollView
                {...{
                    style: [padding('h', 22.94)]
                }}
            >
                <SectionHeader
                    {...{
                        title: i18n.t(`main.filterPage.sections.categories`),
                    }}
                />
                <TagList
                    {...{
                        tags: ObjToArray(i18n.get(`main.topics`)).map((text, id) => ({ id, text })),
                        multiSelect: true,
                        // tags: [
                        //     {
                        //         id: "0",
                        //         text: "Design",
                        //     },
                        //     {
                        //         id: "1",
                        //         text: "Painting",
                        //     },
                        //     {
                        //         id: "2",
                        //         text: "Coding",
                        //     },
                        //     {
                        //         id: "3",
                        //         text: "Music",
                        //     },
                        //     {
                        //         id: "4",
                        //         text: "Virtual Identity",
                        //     },
                        //     {
                        //         id: "5",
                        //         text: "Mathematics",
                        //     },
                        // ]
                    }}
                />
                {Gap({ size: 6.882 })}
                <SectionHeader
                    {...{
                        title: i18n.t(`main.filterPage.sections.price`),
                    }}
                />
                {Gap({ size: 13.764 })}
                <RangePan
                    {...{
                        width: dimension.width - 2 * 22.94,
                        circleSize: 22.94,
                        unit: "$",
                        from: 100,
                        to: 1000,
                        colors: {
                            active: colors.primary,
                            deActive: colors.secondary,
                            circleBg: colors.loginFormBg,
                            text: colors.text1
                        },
                        lineHeight: 2.294,
                        keypad,
                    }}
                />
                {Gap({ size: 55.056 })}
                <SectionHeader
                    {...{
                        title: i18n.t(`main.filterPage.sections.duration`),
                    }}
                />
                <TagList
                    {...{
                        tags: ["3-8", "8-14", "14-20", "20-24", "24-30"].map((t) => t.split("-").map((n) => n.split("").map((m) => keypad[m]).join("")).join("-")).map((t, id) => ({ id, text: `${t} ${i18n.t(`timeUnits.h`)}` })),
                        // multiSelect: true,
                    }}
                />
                {Gap({ size: 49.321 })}
            </ScrollView>
            <Animated.View
                {...{
                    style: [fw, height(57.35), styles.fdr, styles.aic, padding("h", 22.94)]
                }}
            >
                <SimpleButton
                    {...{
                        bg: colors.text2,
                        color: colors.white,
                        text: i18n.t(`main.filterPage.btns.clear`),
                    }}
                />
                {Gap({ type: 'l', size: 11.47 })}
                <Animated.View
                    {...{
                        style: [f1]
                    }}
                >
                    <SimpleButton
                        {...{
                            bg: colors.primary,
                            color: colors.white,
                            text: i18n.t(`main.filterPage.btns.applyFilters`),
                        }}
                    />
                </Animated.View>
            </Animated.View>
        </Animated.View>
    )
}
// export function FilterFooter({ id }: IID) {
//     let { theme: { colors } } = useTheme()
//     return (
//         <Animated.View
//             {...{
//                 style: [fw, height(57.35), styles.fdr, styles.aic, padding("h", 22.94)]
//             }}
//         >
//             <SimpleButton
//                 {...{
//                     bg: colors.text2,
//                     color: colors.white,
//                     text: `Clear`,
//                 }}
//             />
//             {Gap({ type: 'l', size: 11.47 })}
//             <Animated.View
//                 {...{
//                     style: [f1]
//                 }}
//             >
//                 <SimpleButton
//                     {...{
//                         bg: colors.primary,
//                         color: colors.white,
//                         text: `Apply Filter`,
//                     }}
//                 />
//             </Animated.View>
//         </Animated.View>
//     )
// }