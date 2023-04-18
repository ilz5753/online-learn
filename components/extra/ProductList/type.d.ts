import { IPaddingHorizontal } from "../../../type";
import { IProduct } from "../Product/type";

export interface IProductList extends IPaddingHorizontal {
    products: IProduct[];
}