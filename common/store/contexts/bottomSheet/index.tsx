import { isEmpty } from "lodash";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ColorValue } from "react-native";
import { IID } from "../../../../type";
import { transparent } from "../../../style";
import { useTheme } from "../theme";
import { BottomSheetTemplate } from "./template";
import { IBottomSheet, TBottomSheetData } from "./type";

const BottomSheetContext = createContext<IBottomSheet>({
    show: (_: IID) => { },
    hide: (_: IID) => { },
    exist: (_: IID) => false,
    noSheets: () => false,
});
export function useBottomSheet() {
    let bs = useContext(BottomSheetContext);
    return bs;
}
export function BottomSheetProvider({ children }: PropsWithChildren) {
    let { theme: { colors } } = useTheme()
    let [sheets, setSheets] = useState<TBottomSheetData[]>([]);
    let [AnbBgc, setAnbBgc] = useState<ColorValue>(transparent);
    let exist = ({ id }: IID) => sheets.map(({ id }) => id).includes(id);
    let show = (data: TBottomSheetData) => {
        if (!exist({ id: data.id }))
            setSheets(prevSheets => [...prevSheets, data]);
    }
    let hide = ({ id }: IID) => {
        if (exist({ id }))
            setSheets(prevSheets => prevSheets.filter((sheet) => sheet.id !== id));
    }
    let noSheets = () => isEmpty(sheets);
    let ctx: IBottomSheet = {
        show,
        hide,
        exist,
        noSheets,
    }
    return (
        <BottomSheetContext.Provider
            {...{
                value: ctx
            }}
        >
            {children}
            {sheets.map((sheet) => (
                <BottomSheetTemplate {...{ key: sheet.id, ctx, ...sheet }} />
            ))}
        </BottomSheetContext.Provider>
    )
}