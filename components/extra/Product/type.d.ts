import { IID, IMeasure, IName, IPress, ISourceUri } from "../../../type";

export interface IProduct extends IID, ISourceUri, IName, IPress {
    seller: string;
    price: IMeasure<number, "$">;
    time: IMeasure<number, "day" | "hour" | "minute">;
}