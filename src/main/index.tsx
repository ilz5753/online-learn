import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainBottomTabBar } from "../../components/extra/tabBar/MainBottom";
import Home from "./home";
import HomeLogo from "../../components/extra/svgs/mainBottomTab/home";
import AccountLogo from "../../components/extra/svgs/mainBottomTab/account";
import CourseLogo from "../../components/extra/svgs/mainBottomTab/course";
import MessageLogo from "../../components/extra/svgs/mainBottomTab/message";
import { SearchLogo } from "../../components/extra/svgs/mainBottomTab/search";
import Account from "./account";
import Course from "./course";
import Message from "./message";
import Search from "./search";
const BottomTab = createBottomTabNavigator();
const screens = [
    {
        name: "Home", // name of the screen
        component: Home, // component linked to the screen
        options: {
            tabBarIcon: HomeLogo,
        } // screen options
    },
    {
        name: "Course", // name of the screen
        component: Course, // component linked to the screen
        options: {
            tabBarIcon: CourseLogo,
        } // screen options
    },
    {
        name: "Search", // name of the screen
        component: Search, // component linked to the screen
        options: {
            tabBarIcon: SearchLogo,
        } // screen options
    },
    {
        name: "Message", // name of the screen
        component: Message, // component linked to the screen
        options: {
            tabBarIcon: MessageLogo,
        } // screen options
    },
    {
        name: "Account", // name of the screen
        component: Account, // component linked to the screen
        options: {
            tabBarIcon: AccountLogo,
        } // screen options
    },
];
export default function Main() {
    let tabBar = (p: BottomTabBarProps) => <MainBottomTabBar {...p} />
    return (
        <BottomTab.Navigator
            {...{
                screenOptions: {
                    headerShown: false
                },
                // initialRouteName: screens[4].name,
                tabBar,
            }}
        >
            {screens.map((stack, key) => (
                <BottomTab.Screen
                    {...{
                        key,
                        ...stack,
                    }}
                />
            ))}
        </BottomTab.Navigator>
    )
}