import { ComponentType } from "react";
import { IPress, ITitle } from "../../../type";

export interface IRecommendation extends ITitle, IPress {
    Svg: ComponentType;
    bg: string;
    color: string;
}