import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../../../../common/store/contexts/language";
import { useTheme } from "../../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, fontSize, height, padding, squareLayout, styles } from "../../../../common/style";
import { hexToRGBA } from "../../../../common/utils/colorConverts";
import { isRTL } from "../../../../common/utils/dir";
import { AII, ATO } from "../../../../components/animatedComponents";
import LearningOverview from "../../../../components/extra/learningOverview";
import { LinearGradientProgress } from "../../../../components/extra/linearGradientProgress";
import { Gap } from "../../../../components/gap";
import { IOSHeader } from "../../../../components/headers/ios";
import { Layout } from "../../../../components/layout";
import { List } from "../../../../components/list";
import { ScrollView } from "../../../../components/scrollview";

export default function MyCourses() {
    let { theme: { colors } } = useTheme()
    let { goBack, navigate } = useNavigation()
    let insets = useSafeAreaInsets()
    let courses = [
        {
            id: "0",
            title: `Product Design v1.0`,
            finished: 14,
            all: 24,
            from: colors.text4,
            to: `#ec7b9c`,
        },
        {
            id: "1",
            title: `Java Development`,
            finished: 12,
            all: 18,
            from: colors.text4,
            to: `#3d5cff`,
        },
        {
            id: "2",
            title: `Visual Design`,
            finished: 10,
            all: 16,
            from: colors.text4,
            to: `#398a80`,
        },
        {
            id: "3",
            title: `Product Design v1.0`,
            finished: 14,
            all: 24,
            from: colors.text4,
            to: `#ec7b9c`,
        },
        {
            id: "4",
            title: `Java Development`,
            finished: 12,
            all: 18,
            from: colors.text4,
            to: `#ec7b9c`,
        },
        {
            id: "5",
            title: `Visual Design`,
            finished: 10,
            all: 16,
            from: colors.text4,
            to: `#ec7b9c`,
        },
    ];
    return (
        <Layout>
            {Gap({ size: insets.top })}
            <IOSHeader
                {...{
                    title: i18n.t(`main.Home.MyCourses.title`),
                    leftButton: {
                        activeOpacity: 0.84,
                        onPress: goBack,
                        children: (
                            <AII
                                {...{
                                    name: `chevron-${isRTL() ? "forward" : "back"}`,
                                    size: 27.528,
                                    color: colors.text1
                                }}
                            />
                        )
                    },
                    paddingHorizontal: 18.352,
                }}
            />
            {Gap({ size: 13.764 })}
            <Animated.View
                {...{
                    style: [padding("h", 22.94)]
                }}
            >
                <LearningOverview
                    {...{
                        title: i18n.t(`main.Home.learnProgress.title`),
                        progress: {
                            all: 60,
                            finished: 46,
                            from: colors.white,
                            to: colors.orange
                        },
                        unit: "min",
                    }}
                />
            </Animated.View>
            {Gap({ size: 22.94 })}
            <ScrollView>
                {List({
                    data: courses,
                    Render({ item, width }) {
                        let onPress = () => {
                            navigate("CourseDetails", { data: item })
                        }
                        let { title, id, finished, all, from, to } = item;
                        return (
                            <Animated.View
                                {...{
                                    style: [{ width }, height(209.545), borderRadius("", 13.764), backgroundColor(hexToRGBA(to, 0.1)), styles.jcSb, padding("h", 21.793), padding("t", 27.528), padding("b", 12.789)],
                                }}
                            >
                                <Animated.Text
                                    {...{
                                        style: [fontSize(18.352), color(colors.text1), styles.foWeB, styles.tal]
                                    }}
                                >
                                    {title}
                                </Animated.Text>
                                <Animated.View>
                                    <LinearGradientProgress {...{ finished, all, from, to }} />
                                    {Gap({ size: 7.501 })}
                                    <Animated.Text
                                        {...{
                                            style: [fontSize(12), color(colors.text1), styles.tal]
                                        }}
                                    >
                                        {i18n.t(`main.Home.MyCourses.course.completed`)}
                                    </Animated.Text>
                                    <Animated.View
                                        {...{
                                            style: [styles.fdr, styles.aic, styles.jcSb]
                                        }}
                                    >
                                        <Animated.View
                                            {...{
                                                style: [styles.fdr, styles.aiFe]
                                            }}
                                        >
                                            <Animated.Text
                                                {...{
                                                    style: [fontSize(22.94), color(colors.text1), styles.foWe7]
                                                }}
                                            >
                                                {finished}
                                            </Animated.Text>
                                            {/* {Gap({ type: "l", size: 4.588 })} */}
                                            <Animated.Text
                                                {...{
                                                    style: [fontSize(13.764), color(colors.text1), styles.foWe7]
                                                }}
                                            >
                                                /
                                            </Animated.Text>
                                            {Gap({ type: "l", size: 4.588 })}
                                            <Animated.Text
                                                {...{
                                                    style: [fontSize(13.764), color(colors.text1), styles.foWe7]
                                                }}
                                            >
                                                {all}
                                            </Animated.Text>
                                        </Animated.View>
                                        <ATO
                                            {...{
                                                style: [squareLayout(50.468), borderRadius("", 25.238), backgroundColor(to), styles.center],
                                                activeOpacity: 0.84,
                                                onPress,
                                            }}
                                        >
                                            <AII
                                                {...{
                                                    name: `ios-play`,
                                                    size: 22.94,
                                                    color: colors.white
                                                }}
                                            />
                                        </ATO>
                                    </Animated.View>
                                </Animated.View>
                            </Animated.View>
                        )
                    },
                    numColumns: 2,
                    spaces: {
                        betweenItems: 16.058,
                        betweenRows: 16.058,
                        horizontal: 22.94,
                    }
                })}
                {Gap({ size: 22.94 })}
            </ScrollView>
        </Layout>
    )
}