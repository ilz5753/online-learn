import { IID, IPress, IText, TFunc } from "../../../type";

export interface ISearchTag extends IPress, IText {
    bg: string;
    color: string;
}
export interface ITag extends IID, IText {}
export interface ITagList {
    tags: ITag[];
    multiSelect?: boolean;
    updateSelections?: TFunc<ITag[]>;
}