import i18n from "../../../common/store/contexts/language";
import { NoVideosLogo } from "../../../components/extra/svgs/NoVideos";
import { EmptyLayout } from "../../../components/layout";

export default function NoVideo() {
    return (
        <EmptyLayout
            {...{
                canGoBack: true,
                Svg: NoVideosLogo,
                title: i18n.t(`empties.noVideos.title`),
                message: i18n.t(`empties.noVideos.description`),
                forwardBtn: {
                    text: i18n.t(`empties.noVideos.btnText`),
                }
            }}
        />
    )
}