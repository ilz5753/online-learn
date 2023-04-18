import { useState } from "react";
import Animated from "react-native-reanimated";
import i18n from "../../../common/store/contexts/language";
import { useTheme } from "../../../common/store/contexts/theme";
import { color, fontSize, height, styles } from "../../../common/style";
import { ATO } from "../../animatedComponents";
import { List } from "../../list";
import { IKeypad } from "./type";

export function Keypad({ setPhoneNumber, PhoneNumber = "", max = 12 }: IKeypad) {
    let { theme: { colors } } = useTheme()
    let [value, setValue] = useState(PhoneNumber);
    let onNumberPress = (number: string) => {
        if (value.length < max) {
            let newValue = `${value}${number}`;
            setValue(newValue);
            setPhoneNumber(newValue);
        }
    }
    let onDeletePress = () => {
        let vl = value.length;
        if (vl >= 0) {
            let newValue = value.slice(0, vl - 1);
            setValue(newValue)
            setPhoneNumber(newValue)
        }
    }
    let clearPhoneNumber = () => {
        setValue(``);
        setPhoneNumber(``);
    }
    let numbers = [
        {
            id: "1",
            text: 1,
            onPress: () => onNumberPress("1"),
        },
        {
            id: "2",
            text: 2,
            onPress: () => onNumberPress("2"),
        },
        {
            id: "3",
            text: 3,
            onPress: () => onNumberPress("3"),
        },
        {
            id: "4",
            text: 4,
            onPress: () => onNumberPress("4"),
        },
        {
            id: "5",
            text: 5,
            onPress: () => onNumberPress("5"),
        },
        {
            id: "6",
            text: 6,
            onPress: () => onNumberPress("6"),
        },
        {
            id: "7",
            text: 7,
            onPress: () => onNumberPress("7"),
        },
        {
            id: "8",
            text: 8,
            onPress: () => onNumberPress("8"),
        },
        {
            id: "9",
            text: 9,
            onPress: () => onNumberPress("9"),
        },
        {
            id: "empty",
            text: "",
        },
        {
            id: "0",
            text: 0,
            onPress: () => onNumberPress("0"),
        },
        {
            id: "delete",
            text: "del",
            onPress: onDeletePress,
            onLongPress: clearPhoneNumber,
        },
    ];
    return (
        <Animated.View>
            {List({
                data: numbers,
                Render({ item: { text, onPress, onLongPress }, width }) {
                    return (
                        <ATO
                            {...{
                                style: [{ width }, height(55.056), styles.center],
                                activeOpacity: 0.7,
                                onPress,
                                onLongPress
                            }}
                        >
                            <Animated.Text
                                {...{
                                    style: [fontSize(27.528), color(colors.text1), styles.foWe8]
                                }}
                            >
                                {i18n.t(`auth.keypad["${text}"]`)}
                            </Animated.Text>
                        </ATO>
                    );
                },
                numColumns: 3,
                spaces: {
                    betweenItems: 41.292,
                    betweenRows: 41.292,
                    // betweenItems: 13.764,
                    // betweenRows: 13.764,
                    horizontal: 27.528,
                }
            })}
        </Animated.View>
    );
}