import { TFunc, TFunc2 } from "../../../type";

export interface IKeypad {
    PhoneNumber?: string;
    setPhoneNumber: TFunc<TFunc2<string, string> | string>;
    max?: number;
}