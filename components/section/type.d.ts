import { ICustomSubtitle, IMoreBtn, ITitle } from "../../type";

export interface ISectionHeader extends ITitle, ICustomSubtitle, IMoreBtn {}
export interface ISection {
    header?: ISectionHeader;
}