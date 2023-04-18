import i18n from "../../../common/store/contexts/language";
import { NoNotificationLogo } from "../../../components/extra/svgs/NoNotification";
import { EmptyLayout } from "../../../components/layout";

export default function NoNotification() {
    return (
        <EmptyLayout
            {...{
                canGoBack: true,
                Svg: NoNotificationLogo,
                title: i18n.t(`empties.noNotifications.title`),
                message: i18n.t(`empties.noNotifications.description`),
            }}
        />
    )
}