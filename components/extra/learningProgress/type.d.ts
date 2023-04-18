import { ITitle } from "../../../type";

export interface ILearningProgress extends ITitle {
    finished: number;
    all: number;
}
export interface ICircularLearningProgress {
    size?: number, color: { from: string; to: string; }; percent: number;
}