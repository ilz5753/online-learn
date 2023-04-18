import { isEmpty, isEqual } from "lodash";
import { useMemo, useState } from "react";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomSheet } from "../../../common/store/contexts/bottomSheet";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { fw, padding, styles } from "../../../common/style";
import { ObjToArray, randomPositionArray } from "../../../common/utils/funcs";
import { ProductList } from "../../../components/extra/ProductList";
import { products } from "../../../components/extra/ProductList/products";
import SearchTag from "../../../components/extra/SearchTag";
import { Gap } from "../../../components/gap";
import { IOSHeader } from "../../../components/headers/ios";
import { SearchBar } from "../../../components/inputs/searchBar";
import { Layout } from "../../../components/layout";
import { ScrollView } from "../../../components/scrollview";
import { SectionHeader } from "../../../components/section";
import { FilterMain, FilterSheetID } from "../course/filterSheet";

export default function Search() {
    let insets = useSafeAreaInsets()
    let { theme: { colors } } = useTheme()
    let { show } = useBottomSheet()
    let [Search, setSearch] = useState("");
    let suggestedTags = ObjToArray(i18n.get(`main.topics`)).map((text, id) => ({ id, text }));
    let filteredTags = useMemo(() => isEmpty(Search) ? suggestedTags : suggestedTags.filter(({ text }) => text.includes(Search)), [Search])
    let openFilterSheet = () =>
        show({
            id: FilterSheetID,
            Main: FilterMain,
        });
    return (
        <Layout>
            {Gap({ size: insets.top })}
            <IOSHeader
                {...{
                    title: i18n.t(`main.Search.title`),
                }}
            />
            <Animated.View
                {...{
                    style: [padding('h', 22.94)]
                }}
            >
                {Gap({ size: 27.528 })}
                <SearchBar
                    {...{
                        isLink: false,
                        label: i18n.t(`main.Search.searchBarLabel`),
                        text: Search,
                        setText: setSearch,
                        onFilterPress: openFilterSheet
                    }}
                />
            </Animated.View>
            {Gap({ size: 18.352 })}
            <Animated.View
                {...{
                    style: [fw]
                }}
            >
                <ScrollView horizontal>
                    {Gap({ type: "l", size: 22.94 })}
                    {filteredTags.map(({ id, text }, index) => {
                        let active = isEqual(text, Search);
                        return (
                            <Animated.View
                                {...{
                                    key: id,
                                    style: [styles.fdr]
                                }}>
                                <SearchTag
                                    {...{
                                        text,
                                        onPress: () => setSearch(text),
                                        bg: colors[active ? "primary" : "text4"],
                                        color: colors[active ? "white" : "text2"],
                                    }}
                                />
                                {!isEqual(index, suggestedTags.length - 1) && Gap({ type: "l", size: 13.764 })}
                            </Animated.View>
                        )
                    })}
                    {Gap({ type: "l", size: 22.94 })}
                </ScrollView>
            </Animated.View>
            {Gap({ size: 13.764 })}
            <Animated.View
                {...{
                    style: [padding("h", 22.94)]
                }}
            >
                <SectionHeader
                    {...{
                        title: i18n.t(`main.Search.results`)
                    }}
                />
            </Animated.View>
            <ProductList
                {...{
                    products: randomPositionArray(products),
                    paddingHorizontal: 20.92
                }}
            />
        </Layout>
    )
}