import { isEqual } from "lodash";
import Animated from "react-native-reanimated";
import { padding } from "../../../common/style";
import { Gap } from "../../gap";
import { Product } from "../Product";
import { IProductList } from "./type";
import { ScrollView } from "../../scrollview";

export function ProductList({ products, paddingHorizontal = 0 }: IProductList) {
    return (
        <ScrollView
            {...{
                style: [padding("h", paddingHorizontal)]
            }}
        >
            {products.map((product, index) => (
                <Animated.View
                    {...{
                        key: product.id,
                    }}
                >
                    <Product {...product} />
                    {!isEqual(index, products.length - 1) && Gap({ size: 18.352 })}
                </Animated.View>
            ))}
        </ScrollView>
    );
}