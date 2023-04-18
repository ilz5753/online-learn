import { ComponentType } from "react";
import { IDisabled, IOnLongPress, IOnPress, TNoop } from '../../type'
export interface ISimpleButton extends IOnPress, IOnLongPress, IDisabled {
    bg: string;
    color: string;
    text?: string;
    squared?: boolean;
    squareSize?: number;
    icon?: {
        CMP: ComponentType<{ name: any; size: number; color: string; }>;
        name: string;
    };
}