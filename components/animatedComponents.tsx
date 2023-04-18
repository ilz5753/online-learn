import {
    ActivityIndicator,
    ImageBackground,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import {
    AntDesign,
    Ionicons,
    Entypo,
    MaterialIcons,
    MaterialCommunityIcons,
    Feather,
    Foundation,
    Fontisto,
    FontAwesome5,
    SimpleLineIcons,
    Octicons
} from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import {Animated as RNAnimated} from "react-native";
import { LinearGradient } from 'react-native-svg';
const $ = Animated.createAnimatedComponent;
const RN$ = RNAnimated.createAnimatedComponent;
/**
 * Animated Touchable Highlight
 */
export const ATH = $(TouchableHighlight);
/**
 * Animated Touchable Opacity
 */
export const ATO = $(TouchableOpacity);
/**
 * Animated Touchable Without Feedback
 */
export const ATWF = $(TouchableWithoutFeedback);
/**
 * Animated Text Input
 */
export const ATI = $(TextInput);
/**
 * Animated Ionicons Icon pack
 */
export const AII = $(Ionicons);
/**
 * Animated Entypo Icon pack
 */
export const AIE = $(Entypo);
/**
 * Animated AntDesign Icon pack
 */
export const AIAD = $(AntDesign);
/**
 * Animated MaterialIcons Icon pack
 */
export const AIMI = $(MaterialIcons);
/**
 * Animated MaterialCommunityIcons Icon pack
 */
export const AIMCI = $(MaterialCommunityIcons);
/**
 * Animated Feather Icon pack
 */
export const AIF = $(Feather);
/**
 * Animated Foundation Icon pack
 */
export const AIFO = $(Foundation);
/**
 * Animated Fontisto Icon pack
 */
export const AIFOO = $(Fontisto);
/**
 * Animated Octicons Icon pack
 */
export const AIO = $(Octicons);
/**
 * Animated FontAwesome5 Icon pack
 */
// export const AIFA5 = $(FontAwesome5);
export const AIFA5 = FontAwesome5;
/**
 * Animated Activity Indicator component
 */
export const AAI = $(ActivityIndicator);
/**
 * Animated SimpleLineIcons component
 */
export const AISLI = $(SimpleLineIcons);
/**
 * Animated Image Background
 */
export const AIB = $(ImageBackground);
/**
 * Animated Linear Gradient
 */
export const ALG = $(LinearGradient);
/**
 * React Native Animated Linear Gradient
 */
export const RNALG = RN$(LinearGradient);
