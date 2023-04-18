import { MaterialTopTabBarProps, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MessageTopTabBar } from '../../../../components/extra/tabBar/MessageTop';
import Message from './message';
import Notification from './notification';
let MaterialTopTab = createMaterialTopTabNavigator()
let screens = [
    {
        name: `message`,
        component: Message,
    },
    {
        name: `notification`,
        component: Notification,
    }
];
export default function MessagesTopTab() {
    let tabBar = (p: MaterialTopTabBarProps) => <MessageTopTabBar {...p} />
    return (
        <MaterialTopTab.Navigator
            {...{
                tabBar,
            }}
        >
            {screens.map((screen, key) => (
                <MaterialTopTab.Screen {...{ key, ...screen }} />
            ))}
        </MaterialTopTab.Navigator>
    )
}