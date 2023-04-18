import i18n from "../../../common/store/contexts/language";
import { NoNetworkLogo } from "../../../components/extra/svgs/NoNetwork";
import { EmptyLayout } from "../../../components/layout";

export default function NoNetwork() {
    return (
        <EmptyLayout
            {...{
                canGoBack: true,
                Svg: NoNetworkLogo,
                title: i18n.t(`empties.noNetwork.title`),
                message: i18n.t(`empties.noNetwork.description`),
                forwardBtn: {
                    text: i18n.t(`empties.noNetwork.btnText`),
                }
            }}
        />
    )
}