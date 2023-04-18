import { useNavigation } from "@react-navigation/native";
import { isEqual } from "lodash";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomSheet } from "../../../common/store/contexts/bottomSheet";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { color, f1, fontSize, padding, styles } from "../../../common/style";
import { randomPositionArray } from "../../../common/utils/funcs";
import { ATO } from "../../../components/animatedComponents";
import { ProductList } from "../../../components/extra/ProductList";
import { products } from "../../../components/extra/ProductList/products";
import { Recommendation } from "../../../components/extra/Recommendation";
import LanguageRecommended from "../../../components/extra/svgs/Recommened/language";
import PaintingRecommended from "../../../components/extra/svgs/Recommened/painting";
import UserAvatar from "../../../components/extra/svgs/userAvatar";
import { TabView } from "../../../components/extra/tabView";
import { Gap } from "../../../components/gap";
import { SearchBar } from "../../../components/inputs/searchBar";
import { Layout } from "../../../components/layout";
import { ScrollView } from "../../../components/scrollview";
import { SectionHeader } from "../../../components/section";
import { FilterMain, FilterSheetID } from "./filterSheet";

export default function Course() {
    let insets = useSafeAreaInsets()
    let { theme: { colors } } = useTheme()
    let { navigate } = useNavigation()
    let { show } = useBottomSheet()
    let goToAccount = () => navigate("Account");
    let goToSearch = () => navigate("Search");
    let recommended = [
        {
            id: "0",
            title: i18n.t(`main.topics.language`),
            bg: `#ceecfe`,
            color: colors.primary,
            Svg: LanguageRecommended,
        },
        {
            id: "1",
            title: i18n.t(`main.topics.painting`),
            bg: `#efe0ff`,
            color: `#9065be`,
            Svg: PaintingRecommended,
        },
        {
            id: "2",
            title: i18n.t(`main.topics.coding`),
            bg: `#ceecfe`,
            color: colors.primary,
            Svg: LanguageRecommended,
        },
        {
            id: "3",
            title: i18n.t(`main.topics.mathematics`),
            bg: `#efe0ff`,
            color: `#9065be`,
            Svg: PaintingRecommended,
        },
    ];
    let openFilterSheet = () =>
        show({
            id: FilterSheetID,
            Main: FilterMain,
            // Header: FilterHeader,
            // Footer: FilterFooter,
        });
    return (
        <Layout>
            {Gap({ size: insets.top })}
            {Gap({ size: 18.352 })}
            <Animated.View
                {...{
                    style: [styles.fdr, styles.aic, styles.jcSb, padding('h', 22.94)]
                }}
            >
                <Animated.Text
                    {...{
                        style: [styles.foWe7, fontSize(27.528), color(colors.text1)]
                    }}
                >
                    {i18n.t(`main.Course.title`)}
                </Animated.Text>
                <ATO
                    {...{
                        activeOpacity: 0.84,
                        onPress: goToAccount
                    }}
                >
                    <UserAvatar />
                </ATO>
            </Animated.View>
            <Animated.View
                {...{
                    style: [padding('h', 22.94)]
                }}
            >
                {Gap({ size: 18.352 })}
                <SearchBar
                    {...{
                        label: i18n.t(`main.Course.searchBarBtnText`),
                        onLinkPress: goToSearch,
                        onFilterPress: openFilterSheet
                    }}
                />
                {Gap({ size: 4.588 })}
                <ScrollView horizontal>
                    {recommended.map(({ id, ...rec }, index) => (
                        <Animated.View
                            {...{
                                key: id,
                                style: [styles.fdr]
                            }}
                        >
                            <Recommendation {...rec} />
                            {!isEqual(index, recommended.length - 1) && Gap({ type: 'l', size: 17.205 })}
                        </Animated.View>
                    ))}
                </ScrollView>
            </Animated.View>
            {Gap({ size: 22.94 })}
            <Animated.View
                {...{
                    style: [padding('h', 22.94)]
                }}
            >
                <SectionHeader
                    {...{
                        title: i18n.t(`main.Course.choiceCourse.title`)
                    }}
                />
            </Animated.View>
            <Animated.View
                {...{
                    style: [f1, padding('h', 22.94)]
                }}
            >
                <TabView
                    {...{
                        tabs: [
                            {
                                id: `0`,
                                tab: {
                                    text: i18n.t(`main.Course.choiceCourse.tabs.all`),
                                },
                                View: () => (
                                    <ProductList
                                        {...{
                                            products: randomPositionArray(products),
                                            paddingHorizontal: 16.058
                                        }}
                                    />
                                )
                            },
                            {
                                id: `1`,
                                tab: {
                                    text: i18n.t(`main.Course.choiceCourse.tabs.popular`),
                                },
                                View: () => (
                                    <ProductList
                                        {...{
                                            products: randomPositionArray(products),
                                            paddingHorizontal: 16.058
                                        }}
                                    />
                                )
                            },
                            {
                                id: `2`,
                                tab: {
                                    text: i18n.t(`main.Course.choiceCourse.tabs.new`),
                                },
                                View: () => (
                                    <ProductList
                                        {...{
                                            products: randomPositionArray(products),
                                            paddingHorizontal: 16.058
                                        }}
                                    />
                                )
                            },
                        ],
                        // isTop: false
                    }}
                />
            </Animated.View>
        </Layout >
    )
}