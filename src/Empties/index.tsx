import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmptiesEntry from "./EmptiesEntry";
import NoNetwork from "./NoNetwork";
import NoNotification from "./NoNotification";
import NoProduct from "./NoProduct";
import NoVideo from "./NoVideo";
const Stack = createNativeStackNavigator();
const screens = [
    {
        name: "EmptiesEntry", // name of the screen
        component: EmptiesEntry, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "NoNotification", // name of the screen
        component: NoNotification, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "NoNetwork", // name of the screen
        component: NoNetwork, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "NoVideo", // name of the screen
        component: NoVideo, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "NoProduct", // name of the screen
        component: NoProduct, // component linked to the screen
        options: {} // screen options
    },
];
export default function Empties() {
    return (
        <Stack.Navigator
            {...{
                screenOptions: {
                    headerShown: false
                },
                // initialRouteName: screens[0].name
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

