import { ComponentType } from "react";
import { ILinkButton, ITitle, TNoop } from "../type";

export interface IAuthOr {
    text: string;
    bg: string;
    textColor: string;
    paddingHorizontal?: number;
}
export interface IAuthDoYouQuestionItem {
    text: string;
    onPress: TNoop;
    color: string;
}
export interface IAuthDoYouQuestion {
    question: Omit<IAuthDoYouQuestionItem, "onPress">;
    link: IAuthDoYouQuestionItem;
}
export interface IEmptyLayout extends ITitle {
    canGoBack?: boolean;
    Svg: ComponentType;
    message: string;
    forwardBtn?: ILinkButton
}