import { SharedValue } from "react-native-reanimated";
import { IMeasure, IWidth, TNoop } from "../../../type";

export interface IRangeColors {
    active: string;
    deActive: string;
    circleBg: string;
    text: string;
}
export interface IRangeCommon {
    circleSize: number;
    colors: IRangeColors;
    lineHeight?: number;
    keypad?: Record<string, string>;
}
export type TRangeData = IMeasure<number, "$">
export interface IRangePan extends IWidth, IRangeCommon {
    from: number;
    to: number;
    unit: "$";
    precision?: number;
}
export interface IRangePanCircle extends IRangeCommon {
    end: number;
    value: string;
    translateX: SharedValue<number>;
    calculate: TNoop;
}