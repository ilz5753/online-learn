import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { en_US } from "./languages/en-US";
import { fa_IR } from "./languages/fa-IR";
import { TI18nLanguage } from "./type";
// import { PropsWithChildren, createContext, useContext, useMemo, useState } from "react";
// import { languages } from "./languages";
// import { ILanguageContext, TI18nLanguage, TLanguageKey } from "./type";
// let initial: ILanguageContext = {
//     language: fa_IR,
//     setLanguageKey(_: TLanguageKey) { }
// }
// const LanguageContext = createContext(initial);
// export const useLanguage = () => useContext(LanguageContext);
// export function LanguageProvider({ children }: PropsWithChildren) {
//     let [languageKey, setLanguageKey] = useState<TLanguageKey>("fa-IR");//change this just
//     let language = useMemo(() => languages.find(({ key }) => key === languageKey)!, [languageKey, languages])
//     return (
//         <LanguageContext.Provider
//             {...{
//                 value: {
//                     language,
//                     setLanguageKey,
//                 }
//             }}
//         >
//             {children}
//         </LanguageContext.Provider>
//     )
// }
const translations: TI18nLanguage = {
    en: en_US.translation,
    fa: fa_IR.translation,
}

const i18n = new I18n(translations);
i18n.locale = Localization.locale;
i18n.enableFallback = true;
export default i18n;