export interface IAuthField {
    label: string;
    placeholder?: string;
    isPassword?: boolean;
    text?: string;
    setText?(text: string): void;
}