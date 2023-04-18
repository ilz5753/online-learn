import Animated from "react-native-reanimated";
import { IList } from "./type";
import { useWindowDimensions } from "react-native";
import { bw1, margin, padding, styles } from "../../common/style";
import { IID } from "../../type";
import { Gap } from "../gap";
/**
 * Simple List Component
 */
export function List<T extends IID>({ data, Render, spaces = {}, numColumns = 1 }: IList<T>) {
    let dimension = useWindowDimensions();
    let spaceHorizontal = spaces.horizontal ?? 0;
    let spaceBetweenItems = spaces.betweenItems ?? 0;
    let spaceBetweenRows = spaces.betweenRows ?? 0;
    let spaceTop = spaces.top ?? 0;
    let spaceBottom = spaces.bottom ?? 0;
    let colNum = numColumns - 1;
    let width = (dimension.width - (colNum * spaceBetweenItems + spaceHorizontal * 2)) / numColumns;
    return (
        <Animated.View
            {...{
                style: [{ width: dimension.width }, padding('h', spaceHorizontal), styles.fdr, styles.flWrW, margin('t', spaceTop), margin('b', spaceBottom)]
            }}
        >
            {data.map((item, index) => (
                <Animated.View
                    {...{
                        key: item.id,
                    }}
                >
                    <Animated.View
                        {...{
                            style: [
                                styles.fdr,
                            ]
                        }}
                    >
                        {(index % numColumns !== 0) && (
                            <Gap {...{ type: "l", size: spaceBetweenItems }} />
                        )}
                        <Render
                            {...{
                                item,
                                width,
                                index
                            }}
                        />
                    </Animated.View>
                    {(index < data.length - numColumns && Gap({ size: spaceBetweenRows }))}
                </Animated.View>
            ))}
        </Animated.View>
    );
}