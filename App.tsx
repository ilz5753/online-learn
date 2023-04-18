import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ContextManager from "./common/store/contexts";
import { f1, isAndroid } from "./common/style";
import Manager from "./src";
export default function App() {
    return (
        <GestureHandlerRootView
            {...{
                style: [f1]
            }}
        >
            <KeyboardAvoidingView
                {...{
                    style: [f1],
                    behavior: isAndroid ? "height" : "padding"
                }}
            >
                <NavigationContainer>
                    <ContextManager>
                        <Manager />
                    </ContextManager>
                </NavigationContainer>
            </KeyboardAvoidingView>
        </GestureHandlerRootView>
    )
}

