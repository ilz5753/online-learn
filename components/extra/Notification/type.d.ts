import { ComponentType } from "react";
import { IPress, ITitle, IID } from "../../../type";

export interface INotificationsNotification extends IID, ITitle, IPress {
    Svg: ComponentType;
    bg: string;
    date: number;
}