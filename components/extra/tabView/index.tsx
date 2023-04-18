import { isEqual } from "lodash";
import { useState } from "react";
import Animated from "react-native-reanimated";
import { useTheme } from "../../../common/store/contexts/theme";
import { backgroundColor, bw1, f1, full, fw, height, styles, zIndex } from "../../../common/style";
import { Gap } from "../../gap";
import { ScrollView } from "../../scrollview";
import SimpleTabItem from "../SimpleTabItem";
import { ITabView } from "./type";

export function TabView({ tabs, isTop = true }: ITabView) {
    let { theme: { colors } } = useTheme()
    let [selectedTabIndex, setSelectedTabIndex] = useState(0);
    let tabBarItems = tabs.map(({ id, tab }) => ({ id, tab }))
    let views = tabs.map(({ id, View }) => ({ id, View }))
    let length = tabs.length
    let gap = Gap({ size: 27.528 })
    let tabBar = (
        <Animated.View
            {...{
                style: [fw]
            }}
        >
            {!isTop && gap}
            <ScrollView horizontal>
                {tabBarItems.map(({ id, tab }, index) => (
                    <Animated.View
                        {...{
                            key: id,
                            style: [styles.fdr]
                        }}
                    >
                        <SimpleTabItem
                            {...{
                                active: isEqual(index, selectedTabIndex),
                                onPress: () => setSelectedTabIndex(index),
                                ...tab,
                            }}
                        />
                        {!isEqual(index, length - 1) && Gap({ type: 'l', size: 19.499 })}
                    </Animated.View>
                ))}
            </ScrollView>
            {isTop && gap}
        </Animated.View>
    );
    return (
        <Animated.View
            {...{
                style: [f1]
            }}
        >
            {isTop && tabBar}
            <Animated.View
                {...{
                    style: [f1]
                }}
            >
                {views.map(({ id, View }, index) => (
                    <Animated.View
                        {...{
                            key: id,
                            style: [full, styles.posAbs, zIndex(isEqual(index, selectedTabIndex) ? 1 : 0), backgroundColor(colors.bg)]
                        }}
                    >
                        <View />
                    </Animated.View>
                ))}
            </Animated.View>
            {!isTop && tabBar}
        </Animated.View>
    )
}