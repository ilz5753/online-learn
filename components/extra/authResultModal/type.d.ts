import { IDescription, IOnPress, ITitle, TNoop } from "../../../type";

export interface IAuthResultModal extends IOnPress, ITitle, IDescription {
    success?: boolean;
    successText?: string;
    failText?: string;
    closeModal?: TNoop;
}