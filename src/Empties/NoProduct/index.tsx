import i18n from "../../../common/store/contexts/language";
import { NoProductsLogo } from "../../../components/extra/svgs/NoProducts";
import { EmptyLayout } from "../../../components/layout";

export default function NoProduct() {
    return (
        <EmptyLayout
            {...{
                canGoBack: true,
                Svg: NoProductsLogo,
                title: i18n.t(`empties.noProducts.title`),
                message: i18n.t(`empties.noProducts.description`),
            }}
        />
    )
}