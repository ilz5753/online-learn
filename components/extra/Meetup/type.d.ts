import { ComponentType } from "react";
import { IColor, ISubtitle, ITitle } from "../../../type";

export interface IMeetup extends ITitle, ISubtitle, IColor {
    Logo: ComponentType;
}