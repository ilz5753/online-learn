import { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import Animated from "react-native-reanimated";
import { useTheme } from '../../../common/store/contexts/theme';
import { backgroundColor, borderColor, borderRadius, bw1, color, f1, fontSize, fw, height, padding, squareLayout, styles, transparent } from '../../../common/style';
import { Gap } from "../../../components/gap";
import { AIE, ATI, ATO } from '../../animatedComponents';
import { IAuthField } from './type';
export function AuthField({ label, placeholder, isPassword, text = "", setText }: IAuthField) {
    let { theme: { colors }, isDarkMode } = useTheme()
    let ref = useRef<TextInput>();
    let [value, setValue] = useState(text)
    let [STE, setSTE] = useState(false);
    let onFocus = () => ref.current?.focus();
    let onChangeText = (t: string) => {
        setValue(t);
        if (setText) setText(t);
    }
    let onPress = () => setSTE(s => !s);
    return (
        <Animated.View
            {...{
                style: [fw, styles.aiFs]
            }}
        >
            <Animated.Text
                {...{
                    style: [fontSize(16.5), color(colors.text2)]
                }}
            >
                {label}
            </Animated.Text>
            {Gap({ size: 11.47 })}
            <Animated.View
                {...{
                    style: [height(57.35), styles.fdr, styles.aic, padding("h", 22.94), bw1, borderRadius("", 12), borderColor("", isDarkMode ? transparent : colors.text3), backgroundColor(colors.loginFieldBg), bw1,]
                }}
            >
                <ATI
                    {...{
                        ref,
                        style: [f1, fontSize(19.5), color(colors.text1)],
                        value,
                        onChangeText,
                        onFocus,
                        secureTextEntry: STE && isPassword,
                        placeholder,
                    }}
                />
                {isPassword && (
                    <>
                        {Gap({ type: "l", size: 9 })}
                        <ATO
                            {...{
                                style: [squareLayout(30), styles.center],
                                onPress,
                                activeOpacity: 0.84,
                            }}
                        >
                            <AIE
                                {...{
                                    name: `eye${STE ? `-with-line` : ``}`,
                                    size: 27,
                                    color: colors.text3
                                }}
                            />
                        </ATO>
                    </>
                )}
            </Animated.View>
        </Animated.View>
    )
}