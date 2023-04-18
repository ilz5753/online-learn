import { useNavigation } from "@react-navigation/native";
import { isEqual } from "lodash";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import i18n from "../../../../common/store/contexts/language";
import { useTheme } from "../../../../common/store/contexts/theme";
import { backgroundColor, borderRadius, color, f1, fontSize, full, fw, height, padding, styles } from "../../../../common/style";
import { ATO } from "../../../../components/animatedComponents";
import Ad from "../../../../components/extra/Ad";
import Meetup from "../../../../components/extra/Meetup";
import LearningOverview from "../../../../components/extra/learningOverview";
import LearningProgress from "../../../../components/extra/learningProgress";
import { Ad0Logo } from "../../../../components/extra/svgs/Ad0";
import { Ad1Logo } from "../../../../components/extra/svgs/Ad1";
import { MeetupLogo } from "../../../../components/extra/svgs/meetup";
import UserAvatar from "../../../../components/extra/svgs/userAvatar";
import { Gap } from "../../../../components/gap";
import { ScrollView } from "../../../../components/scrollview";
import { SectionHeader } from "../../../../components/section";

export default function Summery() {
    let insets = useSafeAreaInsets()
    let { theme: { colors } } = useTheme()
    let { navigate } = useNavigation()
    let goToAccount = () => navigate("Empties"); // Account
    let goToMyCourses = () => navigate("MyCourses");
    let learningPlans = [
        {
            id: "0",
            title: `Packaging Design`,
            finished: 40,
            all: 48,
        },
        {
            id: "1",
            title: `Product Design`,
            finished: 6,
            all: 24,
        },
    ]
    return (
        <Animated.View
            {...{
                style: [f1]
            }}
        >
            <Animated.View
                {...{
                    style: [fw, height(160.58 + insets.top), backgroundColor(colors.primary)]
                }}
            />
            <Animated.View
                {...{
                    style: [full, backgroundColor(colors.bg)]
                }}
            />
            <Animated.View
                {...{
                    style: [full, styles.overlay]
                }}
            >
                {Gap({ size: insets.top + 18.352 })}
                <Animated.View
                    {...{
                        style: [fw, padding('h', 22.94), styles.fdr, styles.jcSb]
                    }}
                >
                    <Animated.View
                        {...{
                            style: [styles.aiFs]
                        }}
                    >
                        <Animated.Text
                            {...{
                                style: [fontSize(24), styles.foWe7, color(colors.white)]
                            }}
                        >
                            {`${i18n.t(`main.Home.Summery.hi`)} Kristin`}
                        </Animated.Text>
                        {Gap({ size: 4.588 })}
                        <Animated.Text
                            {...{
                                style: [fontSize(14), color(colors.white)]
                            }}
                        >
                            {i18n.t(`main.Home.Summery.subtitle`)}
                        </Animated.Text>
                    </Animated.View>
                    <ATO
                        {...{
                            activeOpacity: 0.84,
                            onPress: goToAccount
                        }}
                    >
                        <UserAvatar />
                    </ATO>
                </Animated.View>
                {Gap({ size: 16 })}
                <ScrollView>
                    {Gap({ size: 20 })}
                    <Animated.View
                        {...{
                            style: [fw, padding('h', 22.94)]
                        }}
                    >
                        <LearningOverview
                            {...{
                                title: i18n.t(`main.Home.learnProgress.title`),
                                progress: {
                                    finished: 46,
                                    all: 60,
                                    from: colors.text4,
                                    to: colors.orange
                                },
                                unit: "min",
                                moreBtn: {
                                    text: i18n.t(`main.Home.learnProgress.link`),
                                    color: colors.primary,
                                    onPress: goToMyCourses
                                }
                            }}
                        />
                        {Gap({ size: 18.352 })}
                        <ScrollView
                            {...{
                                horizontal: true
                            }}
                        >
                            <Ad
                                {...{
                                    title: i18n.t(`main.Home.ad.title`),
                                    btn: {
                                        text: i18n.t(`main.Home.ad.btnText`),
                                    },
                                    Svg: Ad0Logo,
                                }}
                            />
                            {Gap({ type: "l", size: 13.764 })}
                            <Ad
                                {...{
                                    Svg: Ad1Logo,
                                }}
                            />
                        </ScrollView>
                        {Gap({ size: 10.724 })}
                        <SectionHeader
                            {...{
                                title: i18n.t(`main.Home.Summery.learningPlan`),
                            }}
                        />
                        <Animated.View
                            {...{
                                style: [fw, backgroundColor(colors.loginFormBg), padding("h", 18.352), borderRadius("", 13.764)]
                            }}
                        >
                            {Gap({ size: 27.528 })}
                            {learningPlans.map(({ id, ...plan }, index) => (
                                <Animated.View
                                    {...{
                                        key: id
                                    }}
                                >
                                    <LearningProgress {...plan} />
                                    {!isEqual(index, learningPlans.length - 1) && Gap({ size: 20.646 })}
                                </Animated.View>
                            ))}
                            {Gap({ size: 27.528 })}
                        </Animated.View>
                    </Animated.View>
                    {Gap({ size: 16.058 })}
                    <Animated.View
                        {...{
                            style: [padding("h", 22.94)]
                        }}
                    >
                        <Meetup
                            {...{
                                title: i18n.t(`main.Home.meetup.title`),
                                subtitle: i18n.t(`main.Home.meetup.description`),
                                Logo: MeetupLogo,
                                color: colors.purple,
                            }}
                        />
                    </Animated.View>
                </ScrollView>
            </Animated.View>
        </Animated.View>
    );
}