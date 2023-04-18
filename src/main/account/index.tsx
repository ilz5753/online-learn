import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditAccount from "./edit";
import Favorites from "./favorite";
import Help from "./help";
import SettingsOverview from "./overview";
import SettingsAndPrivacy from "./settings";
const Stack = createNativeStackNavigator();
const screens = [
    {
        name: "SettingsOverview", // name of the screen
        component: SettingsOverview, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "Favorites", // name of the screen
        component: Favorites, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "EditAccount", // name of the screen
        component: EditAccount, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "SettingsAndPrivacy", // name of the screen
        component: SettingsAndPrivacy, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "Help", // name of the screen
        component: Help, // component linked to the screen
        options: {} // screen options
    },
];
export default function Account() {
    return (
        <Stack.Navigator
            {...{
                screenOptions: {
                    headerShown: false
                },
                // initialRouteName: screens[3].name
            }}
        >
            {screens.map((stack, key) => (
                <Stack.Screen
                    {...{
                        key,
                        ...stack,
                    }}
                />
            ))}
        </Stack.Navigator>
    )
}

