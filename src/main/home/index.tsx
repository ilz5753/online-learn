import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseDetails from "./courseDetails";
import MyCourses from "./myCourses";
import Summery from "./summery";
const Stack = createNativeStackNavigator();
const screens = [
    {
        name: "Summery", // name of the screen
        component: Summery, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "MyCourses", // name of the screen
        component: MyCourses, // component linked to the screen
        options: {} // screen options
    },
    {
        name: "CourseDetails", // name of the screen
        component: CourseDetails, // component linked to the screen
        options: {} // screen options
    },
];
export default function Home() {
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