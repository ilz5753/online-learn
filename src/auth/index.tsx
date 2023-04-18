import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./forgotPassword";
import Login from "./login";
import SignUp from "./signUp";
const Stack = createNativeStackNavigator();
const screens = [
    {
        name: "Login", // name of the screen
        component: Login, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "SignUp", // name of the screen
        component: SignUp, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "ForgotPassword", // name of the screen
        component: ForgotPassword, // component linked to the screen
        options: {} // screen options
    },
];
export default function Auth() {
    return (
        <Stack.Navigator
            {...{
                screenOptions: {
                    headerShown: false
                },
                // initialRouteName: screens[1].name
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