import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Animated from "react-native-reanimated";
import { full, styles } from "../common/style";
import { AAI } from "../components/animatedComponents";
import { Layout } from "../components/layout";
import Auth from "./auth";
import Main from "./main";
import OnBoarding from "./onBoarding";
import Splash from "./splash";
import Empties from "./Empties";
const Stack = createNativeStackNavigator();
const screens = [
    {
        name: "Splash", // name of the screen
        component: Splash, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "OnBoarding", // name of the screen
        component: OnBoarding, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "Auth", // name of the screen
        component: Auth, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "Main", // name of the screen
        component: Main, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "Empties", // name of the screen
        component: Empties, // component linked to the screen
        options: {} // screen options
    },
];
export default function Manager() {
    const [fontsLoaded] = useFonts({
        'Poppins': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    });
    if (!fontsLoaded) return (
        <Layout>
            <Animated.View
                {...{
                    style: [full, styles.center]
                }}
            >
                <AAI
                    {...{
                        size: "large",
                        color: "purple",
                    }}
                />
            </Animated.View>
        </Layout>
    )
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

