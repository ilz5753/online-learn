import { useState } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { backgroundColor, borderRadius, borderWidth, color, fontSize, fw, height, squareLayout, styles, top } from "../../../common/style";
import { isRTLReanimated } from "../../../common/utils/dir";
import { Clamp } from "../../../common/utils/reanimated";
import { Gap } from "../../gap";
import { IRangePan, IRangePanCircle } from "./type";

export function RangePan({ width, circleSize, unit, from, to, colors, precision = 0, lineHeight = 1.147, keypad }: IRangePan) {
    let Diff = to - from;
    let end = width - circleSize;
    let FromX = useSharedValue(0);
    let ToX = useSharedValue(0);
    let ActiveWidth = useSharedValue(0);
    let TranslateX = useSharedValue(0);
    let [fromValue, setFromValue] = useState(from);
    let [toValue, setToValue] = useState(from);

    let updateFromValue = (value: number) => {
        setFromValue(Number(((value / end) * Diff + from).toFixed(precision)));
    };
    let updateToValue = (value: number) => {
        setToValue(Number(((value / end) * Diff + from).toFixed(precision)));
    };
    let calculate = () => {
        "worklet";
        let diff = FromX.value - ToX.value;
        let tx = 0;
        let condition = isRTLReanimated() ? diff > 0 : diff < 0;
        if (condition) tx = FromX.value;
        else tx = ToX.value;
        let z = isRTLReanimated() ? -1 : 1;
        ActiveWidth.value = Math.abs(diff);
        TranslateX.value = tx;
        runOnJS(updateFromValue)(z * FromX.value);
        runOnJS(updateToValue)(z * ToX.value);
    };
    let animatedStyle = useAnimatedStyle(() => ({
        width: ActiveWidth.value,
        transform: [
            {
                translateX: TranslateX.value + (isRTLReanimated() ? -1 : 1) * circleSize / 2
            }
        ]
    }))
    let lineStyle = [height(lineHeight), borderRadius('', lineHeight / 2)]
    return (
        <Animated.View
            {...{
                style: [{ width }]
            }}
        >
            <Animated.View
                {...{
                    style: [fw, lineStyle, backgroundColor(colors.deActive)]
                }}
            >
                <Animated.View {...{ style: [lineStyle, animatedStyle, styles.overlay, backgroundColor(colors.active)] }} />
            </Animated.View>
            <RangePanCircle
                {...{
                    end,
                    translateX: FromX,
                    data: from,
                    calculate,
                    colors,
                    circleSize,
                    unit,
                    value: `${unit} ${fromValue}`,
                    lineHeight,
                    keypad,
                }}
            />
            <RangePanCircle
                {...{
                    end,
                    colors,
                    circleSize,
                    translateX: ToX,
                    data: to,
                    calculate,
                    unit,
                    value: `${unit} ${toValue}`,
                    lineHeight,
                    keypad,
                }}
            />
        </Animated.View>
    )
}
export function RangePanCircle({ end, colors: { active, deActive, circleBg, text: textColor }, value, translateX, circleSize, calculate, lineHeight = 1.147, keypad }: IRangePanCircle) {
    let isActive = useSharedValue(false);
    let onGestureEvent = useAnimatedGestureHandler({
        onStart(_, ctx: { x: number; }) {
            isActive.value = true;
            ctx.x = translateX.value;
        },
        onActive({ translationX }, ctx) {
            let lower = isRTLReanimated() ? -end : 0;
            let upper = isRTLReanimated() ? 0 : end;
            translateX.value = Clamp(ctx.x + translationX, lower, upper);
            calculate();
        },
        onEnd() {
            isActive.value = false;
        },
    })
    let bgc = backgroundColor(circleBg);
    let viewStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value
            }
        ],
        zIndex: isActive.value ? 1 : 0,
    }));
    let circleStyle = useAnimatedStyle(() => ({
        borderColor: isActive.value ? active : deActive,
    }));
    return (
        <PanGestureHandler
            {...{
                onGestureEvent
            }}
        >
            <Animated.View
                {...{
                    style: [styles.aiFs, viewStyle, styles.posAbs, top(-(circleSize - lineHeight) / 2)]
                }}
            >
                <Animated.View {...{ style: [squareLayout(circleSize), borderRadius('', circleSize / 2), borderWidth('', lineHeight), circleStyle, bgc] }} />
                {Gap({ size: 3.441 })}
                <Animated.View
                    {...{
                        style: [bgc, styles.aic]
                    }}
                >
                    <Animated.Text
                        {...{
                            style: [fontSize(16.058), color(textColor), styles.foWe6],
                            children: keypad ? value.split("").map((k) => k in keypad ? keypad[k] : k).join("") : value
                        }}
                    />
                </Animated.View>
            </Animated.View>
        </PanGestureHandler>
    )
}