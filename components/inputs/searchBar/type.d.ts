import { ICustomLabel, IInputProps, IPress, TNoop } from "../../../type";

export interface ISearchBar extends IInputProps, ICustomLabel {
    isLink?: boolean;
    onLinkPress?: TNoop;
    onFilterPress?: TNoop;
}