import { ComponentType } from "react";
import { ICustomTitle, ILinkButton, ITitle } from "../../../type";

export interface IAd extends ICustomTitle {
    btn?: ILinkButton;
    Svg: ComponentType;
}