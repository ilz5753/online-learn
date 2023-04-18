import { ComponentType } from "react";

export interface IList<T> {
    data: T[];
    Render: ComponentType<{ item: T; index: number; width: number }>;
    spaces?: {
        betweenItems?: number;
        betweenRows?: number;
        top?: number;
        bottom?: number;
        horizontal?: number;
    };
    numColumns?: number;
}