import { isEqual } from "lodash";
import Animated from "react-native-reanimated";
import i18n from "../../../../../common/store/contexts/language";
import { useTheme } from "../../../../../common/store/contexts/theme";
import { padding } from "../../../../../common/style";
import { NotificationsNotification } from "../../../../../components/extra/Notification";
import { INotificationsNotification } from "../../../../../components/extra/Notification/type";
import { MessageBubble } from "../../../../../components/extra/svgs/MessageBubble";
import { PaymentIconLogo } from "../../../../../components/extra/svgs/PaymentIcon";
import { Gap } from "../../../../../components/gap";
import { Layout } from "../../../../../components/layout";
import { ScrollView } from "../../../../../components/scrollview";

export default function Notification() {
    let { theme: { colors } } = useTheme()
    let messages = i18n.get(`main.Message.notification.messages`);
    let notifications: INotificationsNotification[] = [
        {
            id: "0",
            title: messages["0"],
            Svg: () => <PaymentIconLogo {...{ color: colors.orange }} />,
            bg: `#ffebf0`,
            date: new Date().getTime()
        },
        {
            id: "1",
            title: messages["1"],
            Svg: () => <MessageBubble {...{ color: colors.primary }} />,
            bg: `#eaeaff`,
            date: new Date().getTime()
        },
        {
            id: "2",
            title: messages["2"],
            Svg: () => <MessageBubble {...{ color: colors.primary }} />,
            bg: `#eaeaff`,
            date: new Date().getTime()
        },
        {
            id: "3",
            title: messages["3"],
            Svg: () => <MessageBubble {...{ color: colors.primary }} />,
            bg: `#eaeaff`,
            date: new Date().getTime()
        },
    ]
    return (
        <Layout>
            {Gap({ size: 6.882 })}
            <ScrollView
                {...{
                    style: [padding("h", 22.94)]
                }}
            >
                {Gap({ size: 11.47 })}
                {notifications.map((notification, index) => (
                    <Animated.View
                        {...{
                            key: notification.id,
                        }}
                    >
                        <NotificationsNotification {...notification} />
                        {!isEqual(index, notifications.length - 1) && Gap({ size: 18.352 })}
                    </Animated.View>
                ))}
                {Gap({ size: 11.47 })}
            </ScrollView>
        </Layout>
    )
}