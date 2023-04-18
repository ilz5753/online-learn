import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Emaill from "./Email";
import Phone from "./Phone";
import VerifyPhone from "./VerifyPhone";
const Stack = createNativeStackNavigator();
const screens = [
    {
        name: "Emaill", // name of the screen
        component: Emaill, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "Phone", // name of the screen
        component: Phone, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "VerifyPhone", // name of the screen
        component: VerifyPhone, // component linked to the screen
        options: {} // screen options
    },
];
export default function SignUp() {
    return (
        <Stack.Navigator
            {...{
                screenOptions: {
                    headerShown: false
                },
                // initialRouteName: screens[2].name
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