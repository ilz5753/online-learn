import { ComponentType } from 'react'
import { IOnPress, ISource } from '../../../type'
export interface IAuthViaSSOAccount extends IOnPress {
    Svg: ComponentType;
}
export interface IAuthViaSSO {
    accounts: IAuthViaSSOAccount[]
}