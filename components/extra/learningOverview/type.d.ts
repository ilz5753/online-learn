import { IMoreBtn, ITitle } from "../../../type";
import { ILinearGradientProgress } from "../linearGradientProgress/type";

export interface ILearningOverview extends ITitle, IMoreBtn {
    progress: ILinearGradientProgress;
    unit: "hour" | "min" | "sec";
}