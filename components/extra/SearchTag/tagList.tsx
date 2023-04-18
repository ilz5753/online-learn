import { isEqual } from "lodash";
import { useState } from "react";
import Animated from "react-native-reanimated";
import SearchTag from ".";
import { useTheme } from "../../../common/store/contexts/theme";
import { margin, styles } from "../../../common/style";
import { Gap } from "../../gap";
import { ITagList } from "./type";

export function TagList({ tags, multiSelect, updateSelections }: ITagList) {
    let { theme: { colors } } = useTheme()
    let [selects, setSelects] = useState<(string | number)[]>(multiSelect ? [] : [tags[0].id]);
    return (
        <Animated.View
            {...{
                style: [styles.fdr, styles.flWrW]
            }}
        >
            {tags.map((tag, index) => {
                let active = selects.includes(tag.id);
                let onPress = () => {
                    let prevSelects = [...selects];
                    if (multiSelect) {
                        let ii = prevSelects.indexOf(tag.id);
                        if (active) prevSelects.splice(ii, 1);
                        else prevSelects.push(tag.id);
                    }
                    else prevSelects = [tag.id]
                    setSelects(prevSelects);
                    if (updateSelections) updateSelections(tags.filter((t) => prevSelects.includes(t.id)));
                };
                return (
                    <Animated.View
                        {...{
                            key: tag.id,
                            style: [styles.fdr, margin("b", 13.764)]
                        }}
                    >
                        <SearchTag
                            {...{
                                ...tag,
                                onPress,
                                bg: colors[active ? "primary" : "loginBg"],
                                color: colors[active ? "white" : "text2"],
                                disabled: active && !multiSelect
                            }}
                        />
                        {!isEqual(index, tags.length - 1) && Gap({ type: "l", size: 13.764 })}
                    </Animated.View>
                )
            })}
        </Animated.View>
    )
}