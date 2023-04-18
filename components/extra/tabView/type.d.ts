import { ComponentType } from "react";
import { IID, IText } from "../../../type";
import { ISimpleTabItem } from "../SimpleTabItem/type";

export interface ITabViewItem extends IID {
    tab: IText;
    View: ComponentType;
}
export interface ITabView {
    tabs: ITabViewItem[];
    isTop?: boolean;
    space?: {
        top?: number;
        bottom?: number;
    }
}