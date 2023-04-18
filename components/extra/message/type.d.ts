import { IName, IPress, ISourceUri, IText } from "../../../type";

export interface IMessageOverview extends IName, ISourceUri, IText, IPress {
    isOnline?: boolean;
    date: number;
    assets?: string[];
}