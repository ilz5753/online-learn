import { ComponentType } from "react";
import { IID, IShow, TFunc, TFunc2 } from "../../../../type";

export interface IBottomSheetTemplate {
    Header?: ComponentType<IID>;
    Main: ComponentType<IID>;
    Footer?: ComponentType<IID>;
}
export interface IBottomSheetData extends IID, IBottomSheetTemplate {
    ctx: IBottomSheet;
}
export type TBottomSheetData = Omit<IBottomSheetData, "ctx">
export interface IBottomSheet {
    show: TFunc<TBottomSheetData>;
    hide: TFunc<IID>;
    exist: TFunc2<IID, boolean>;
    noSheets(): boolean;
}