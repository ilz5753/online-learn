import { TNoop } from "../../type";

export interface ICheckBox {
    checked?: boolean;
    toggle?: TNoop;
    size?: number;
    activeBg?: string;
    activeColor?: string;
    deActiveBg?: string;
    deActiveBorderColor?: string;
}