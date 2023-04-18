import { ComponentType } from 'react';
import { ISource, TNoop } from '../../../type';
export interface IOnBoardingSliderData {
    Svg: ComponentType;
    id: string;
    title: string;
    description: string;
}
export interface ITextButton {
    text: string;
    onPress: TNoop;
}
export interface IOnBoardingSlider {
    data: IOnBoardingSliderData[];
    skipButton: ITextButton;
    loginButton: ITextButton;
    signupButton: ITextButton;
}
export interface IOnBoardingSliderPaginationItem {
    isActive: boolean;
}
export interface IOnBoardingSliderPagination {
    paginations: string[];
    activePage: number;
}