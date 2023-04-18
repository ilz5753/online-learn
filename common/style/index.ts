import { Platform, StyleSheet } from "react-native";
export let styles = StyleSheet.create({
    foWe1: {
        fontWeight: "100",
    },
    foWe2: {
        fontWeight: "200",
    },
    foWe3: {
        fontWeight: "300",
    },
    foWe4: {
        fontWeight: "400",
    },
    foWe5: {
        fontWeight: "500",
    },
    foWe6: {
        fontWeight: "600",
    },
    foWe7: {
        fontWeight: "700",
    },
    foWe8: {
        fontWeight: "800",
    },
    foWe9: {
        fontWeight: "900",
    },
    foWeB: {
        fontWeight: "bold",
    },
    "boSt.": {
        borderStyle: "dotted",
    },
    "boSt-": {
        borderStyle: "dashed",
    },
    foStI: {
        fontStyle: "italic",
    },
    tac: {
        textAlign: "center",
    },
    taj: {
        textAlign: "justify",
    },
    tal: {
        textAlign: "left",
    },
    tar: {
        textAlign: "right",
    },
    tavAT: {
        textAlignVertical: "top",
    },
    tavAB: {
        textAlignVertical: "bottom",
    },
    tavAC: {
        textAlignVertical: "center",
    },
    teDeLiU: {
        textDecorationLine: "underline",
    },
    teDeLiLT: {
        textDecorationLine: "line-through",
    },
    teDeLiULT: {
        textDecorationLine: "underline line-through",
    },
    "teDeStIos.": {
        textDecorationStyle: "dotted",
    },
    "teDeStIos-": {
        textDecorationStyle: "dashed",
    },
    "teDeStIos🧬": {
        textDecorationStyle: "double",
    },
    teTrU: {
        textTransform: "uppercase",
    },
    teTrL: {
        textTransform: "lowercase",
    },
    teTrC: {
        textTransform: "capitalize",
    },
    wrDiLtr: {
        writingDirection: "ltr",
    },
    wrDiRtl: {
        writingDirection: "rtl",
    },
    acc: {
        alignContent: "center",
    },
    acFs: {
        alignContent: "flex-start",
    },
    acFe: {
        alignContent: "flex-end",
    },
    acs: {
        alignContent: "stretch",
    },
    acSa: {
        alignContent: "space-around",
    },
    acSb: {
        alignContent: "space-between",
    },
    aic: {
        alignItems: "center",
    },
    aiFs: {
        alignItems: "flex-start",
    },
    aiFe: {
        alignItems: "flex-end",
    },
    ais: {
        alignItems: "stretch",
    },
    aib: {
        alignItems: "baseline",
    },
    asa: {
        alignSelf: "auto",
    },
    asc: {
        alignSelf: "center",
    },
    asFs: {
        alignSelf: "flex-start",
    },
    asFe: {
        alignSelf: "flex-end",
    },
    ass: {
        alignSelf: "stretch",
    },
    asb: {
        alignSelf: "baseline",
    },
    iosDirI: {
        direction: "inherit",
    },
    iosDirLtr: {
        direction: "ltr",
    },
    iosDirRtl: {
        direction: "rtl",
    },
    df: {
        display: "flex",
    },
    dn: {
        display: "none",
    },
    fdc: {
        flexDirection: "column",
    },
    fdr: {
        flexDirection: "row",
    },
    fdCr: {
        flexDirection: "column-reverse",
    },
    fdRr: {
        flexDirection: "row-reverse",
    },
    flWrNW: {
        flexWrap: "nowrap",
    },
    flWrW: {
        flexWrap: "wrap",
    },
    flWrWR: {
        flexWrap: "wrap-reverse",
    },
    jcc: {
        justifyContent: "center",
    },
    jcFs: {
        justifyContent: "flex-start",
    },
    jcFe: {
        justifyContent: "flex-end",
    },
    jcSa: {
        justifyContent: "space-around",
    },
    jcSb: {
        justifyContent: "space-between",
    },
    jcSe: {
        justifyContent: "space-evenly",
    },
    ofv: {
        overflow: "visible",
    },
    ofh: {
        overflow: "hidden",
    },
    ofs: {
        overflow: "scroll",
    },
    posAbs: {
        position: "absolute"
    },
    posRel: {
        position: "relative"
    },
    reMoCov: {
        resizeMode: "cover",
    },
    reMoCon: {
        resizeMode: "contain",
    },
    reMoCen: {
        resizeMode: "center",
    },
    reMoStr: {
        resizeMode: "stretch",
    },
    reMoRep: {
        resizeMode: "repeat",
    },
    baFaViV: {
        backfaceVisibility: "visible",
    },
    baFaViH: {
        backfaceVisibility: "hidden",
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        position: "absolute",
        zIndex: 1,
    },
    row: {
        display: "flex",
        flexDirection: "row",
    }
});
export type TVDir = 't' | 'b';
export type THDir = 'l' | 'r';
export type TDir = TVDir | THDir;
export type TStrNum = string | number;
export type TDirections = TDir | 'h' | 'v';
export type TSpacing = TDirections | 'tl' | 'lt' | 'tr' | 'rt' | 'br' | 'rb' | 'lb' | 'bl' | 'ht' | 'th' | 'hb' | 'bh' | 'vl' | 'lv' | 'vr' | 'rv' | '';
export type TBorder = 'tbr' | 'brt' | 'tbl' | 'blt' | 'btr' | 'trb' | 'btl' | 'tlb';
export interface ILayout {
    width: number;
    height: number;
}
export let transparent = "transparent";
export const backgroundColor = (backgroundColor?: string) => ({ backgroundColor });
export const padding = (type: TSpacing = '', size: TStrNum = 0) => {
    let p: Record<string, TStrNum> = {};
    switch (type) {
        case 't':
            p.paddingTop = size
            break;
        case 'b':
            p.paddingBottom = size
            break;
        case 'l':
            p.paddingLeft = size
            break;
        case 'r':
            p.paddingRight = size
            break;
        case 'h':
            p.paddingHorizontal = size
            break;
        case 'v':
            p.paddingVertical = size
            break;
        case 'ht':
        case 'th':
            p.paddingHorizontal = size
            p.paddingTop = size
            break;
        case 'hb':
        case 'bh':
            p.paddingHorizontal = size
            p.paddingBottom = size
            break;
        case 'vl':
        case 'lv':
            p.paddingVertical = size
            p.paddingLeft = size
            break;
        case 'vr':
        case 'rv':
            p.paddingVertical = size
            p.paddingRight = size
            break;
        case 'lt':
        case 'tl':
            p.paddingLeft = size
            p.paddingTop = size
            break;
        case 'rt':
        case 'tr':
            p.paddingRight = size
            p.paddingTop = size
            break;
        case 'lb':
        case 'bl':
            p.paddingLeft = size
            p.paddingBottom = size
            break;
        case 'rb':
        case 'br':
            p.paddingRight = size
            p.paddingBottom = size
            break;
        default:
            p.padding = size;
            break;
    }
    return p;
}
export const margin = (type: TSpacing = '', size: TStrNum = 0) => {
    let m: Record<string, TStrNum> = {};
    switch (type) {
        case 't':
            m.marginTop = size
            break;
        case 'b':
            m.marginBottom = size
            break;
        case 'l':
            m.marginLeft = size
            break;
        case 'r':
            m.marginRight = size
            break;
        case 'h':
            m.marginHorizontal = size
            break;
        case 'v':
            m.marginVertical = size
            break;
        case 'ht':
        case 'th':
            m.marginHorizontal = size
            m.marginTop = size
            break;
        case 'hb':
        case 'bh':
            m.marginHorizontal = size
            m.marginBottom = size
            break;
        case 'vl':
        case 'lv':
            m.marginVertical = size
            m.marginLeft = size
            break;
        case 'vr':
        case 'rv':
            m.marginVertical = size
            m.marginRight = size
            break;
        case 'lt':
        case 'tl':
            m.marginLeft = size
            m.marginTop = size
            break;
        case 'rt':
        case 'tr':
            m.marginRight = size
            m.marginTop = size
            break;
        case 'lb':
        case 'bl':
            m.marginLeft = size
            m.marginBottom = size
            break;
        case 'rb':
        case 'br':
            m.marginRight = size
            m.marginBottom = size
            break;
        default:
            m.margin = size;
            break;
    }
    return m;
}
export const borderColor = (type: TSpacing = '', color = transparent) => {
    let bc: Record<string, string> = {};
    switch (type) {
        case "t":
            bc.borderTopColor = color;
            break;
        case "b":
            bc.borderBottomColor = color;
            break;
        case "l":
            bc.borderLeftColor = color;
            break;
        case "r":
            bc.borderRightColor = color;
            break;
        case "h":
            bc.borderLeftColor = color;
            bc.borderRightColor = color;
            break;
        case "v":
            bc.borderTopColor = color;
            bc.borderBottomColor = color;
            break;
        case "tl":
        case "lt":
            bc.borderTopColor = color;
            bc.borderLeftColor = color;
            break;
        case "tr":
        case "rt":
            bc.borderTopColor = color;
            bc.borderRightColor = color;
            break;
        case "bl":
        case "lb":
            bc.borderBottomColor = color;
            bc.borderLeftColor = color;
            break;
        case "br":
        case "rb":
            bc.borderBottomColor = color;
            bc.borderRightColor = color;
            break;
        case "th":
        case "ht":
            bc.borderTopColor = color;
            bc.borderLeftColor = color;
            bc.borderRightColor = color;
            break;
        case "vr":
        case "rv":
            bc.borderTopColor = color;
            bc.borderBottomColor = color;
            bc.borderRightColor = color;
            break;
        case "bh":
        case "hb":
            bc.borderBottomColor = color;
            bc.borderLeftColor = color;
            bc.borderRightColor = color;
            break;
        case "vl":
        case "lv":
            bc.borderTopColor = color;
            bc.borderBottomColor = color;
            bc.borderLeftColor = color;
            break;
        default:
            bc.borderColor = color;
            break;
    }
    return bc;
};
export const borderRadius = (type: (TSpacing | TBorder) = '', size: number = 0) => {
    let br: Record<string, number> = {};
    switch (type) {
        case "bl":
        case "lb":
            br.borderBottomLeftRadius = size;
            break;
        case "br":
        case "rb":
            br.borderBottomRightRadius = size;
            break;
        case "tl":
        case "lt":
            br.borderTopLeftRadius = size;
            break;
        case "tr":
        case "rt":
            br.borderTopRightRadius = size;
            break;
        case "t":
            br.borderTopLeftRadius = size;
            br.borderTopRightRadius = size;
            break;
        case "b":
            br.borderBottomLeftRadius = size;
            br.borderBottomRightRadius = size;
            break;
        case "l":
            br.borderTopLeftRadius = size;
            br.borderBottomLeftRadius = size;
            break;
        case "r":
            br.borderTopRightRadius = size;
            br.borderBottomRightRadius = size;
            break;
        case "brt":
        case "tbr":
            br.borderTopLeftRadius = size;
            br.borderTopRightRadius = size;
            br.borderBottomRightRadius = size;
            break;
        case "blt":
        case "tbl":
            br.borderTopLeftRadius = size;
            br.borderTopRightRadius = size;
            br.borderBottomLeftRadius = size;
            break;
        case "trb":
        case "btr":
            br.borderBottomLeftRadius = size;
            br.borderBottomRightRadius = size;
            br.borderTopRightRadius = size;
            break;
        case "tlb":
        case "btl":
            br.borderBottomLeftRadius = size;
            br.borderBottomRightRadius = size;
            br.borderTopLeftRadius = size;
            break;
        default:
            br.borderRadius = size;
            break;
    }
    return br;
};
export const borderWidth = (type: TSpacing = '', size: number = 0) => {
    let bw: Record<string, number> = {};
    switch (type) {
        case "t":
            bw.borderTopWidth = size;
            break;
        case "b":
            bw.borderBottomWidth = size;
            break;
        case "l":
            bw.borderLeftWidth = size;
            break;
        case "r":
            bw.borderRightWidth = size;
            break;
        case "h":
            bw.borderLeftWidth = size;
            bw.borderRightWidth = size;
            break;
        case "v":
            bw.borderTopWidth = size;
            bw.borderBottomWidth = size;
            break;
        case "tl":
        case "lt":
            bw.borderTopWidth = size;
            bw.borderLeftWidth = size;
            break;
        case "tr":
        case "rt":
            bw.borderTopWidth = size;
            bw.borderRightWidth = size;
            break;
        case "bl":
        case "lb":
            bw.borderBottomWidth = size;
            bw.borderLeftWidth = size;
            break;
        case "br":
        case "rb":
            bw.borderBottomWidth = size;
            bw.borderRightWidth = size;
            break;
        case "th":
        case "ht":
            bw.borderTopWidth = size;
            bw.borderLeftWidth = size;
            bw.borderRightWidth = size;
            break;
        case "vr":
        case "rv":
            bw.borderTopWidth = size;
            bw.borderBottomWidth = size;
            bw.borderRightWidth = size;
            break;
        case "bh":
        case "hb":
            bw.borderBottomWidth = size;
            bw.borderLeftWidth = size;
            bw.borderRightWidth = size;
            break;
        case "vl":
        case "lv":
            bw.borderTopWidth = size;
            bw.borderBottomWidth = size;
            bw.borderLeftWidth = size;
            break;
        default:
            bw.borderWidth = size;
            break;
    }
    return bw;
};
export const AndroidElevation = (elevation?: number) => ({ elevation });
export const opacity = (opacity?: number) => ({ opacity });
export const color = (color?: string) => ({ color });
export const fontFamily = (fontFamily?: string) => ({ fontFamily });
export const fontSize = (fontSize?: number) => ({ fontSize });
export const includeFontPadding = (includeFontPadding = false) => ({ includeFontPadding })
export const letterSpacing = (letterSpacing?: number) => ({ letterSpacing });
export const lineHeight = (lineHeight?: number) => ({ lineHeight });
export const textDecorationColorIOS = (textDecorationColorIOS?: string) => ({ textDecorationColorIOS });
export const textShadowColor = (textShadowColor?: string) => ({ textShadowColor });
export const textShadowRadius = (textShadowRadius?: number) => ({ textShadowRadius });
export const shadowColor = (shadowColor?: string) => ({ shadowColor });
export const shadowOffsetIOS = (shadowOffset?: ILayout) => ({
    shadowOffset,
});
export const shadowOpacityIOS = (shadowOpacityIOS?: number) => ({ shadowOpacityIOS });
export const shadowRadiusIOS = (shadowRadiusIOS?: number) => ({ shadowRadiusIOS });
export const aspectRatio = (aspectRatio?: number) => ({ aspectRatio });
export const bottom = (bottom?: TStrNum) => ({ bottom });
export const end = (end?: TStrNum) => ({ end });
export const flex = (flex?: number) => ({ flex });
export const flexBasis = (flexBasis?: TStrNum) => ({ flexBasis });
export const flexGrow = (flexGrow?: TStrNum) => ({ flexGrow });
export const flexShrink = (flexShrink?: TStrNum) => ({ flexShrink });
export const height = (height?: TStrNum) => ({ height });
export const left = (left?: TStrNum) => ({ left });
export const maxHeight = (maxHeight?: TStrNum) => ({ maxHeight });
export const maxWidth = (maxWidth?: TStrNum) => ({ maxWidth });
export const minWidth = (minWidth?: TStrNum) => ({ minWidth });
export const minHeight = (minHeight?: TStrNum) => ({ minHeight });
export const right = (right?: TStrNum) => ({ right });
export const start = (start?: TStrNum) => ({ start });
export const top = (top?: TStrNum) => ({ top });
export const zIndex = (zIndex?: number) => ({ zIndex });
export const width = (width?: TStrNum) => ({ width });
export const overlayColor = (overlayColor?: string) => ({ overlayColor });
export const tintColor = (tintColor?: string) => ({ tintColor });

export const layout = (w: TStrNum, h: TStrNum) => ({ ...width(w), ...height(h) })
export const squareLayout = (size: TStrNum) => layout(size, size);
export const bw1 = borderWidth('', 1);
export const f1 = flex(1);
export const f2 = flex(2);
export const f3 = flex(3);
export const fw = width('100%');
export const fh = height('100%');
export const full = { ...fw, ...fh };
export const { OS } = Platform;
export const isAndroid = OS === 'android';
export const isIos = OS === 'ios';
export const isWeb = OS === 'web';