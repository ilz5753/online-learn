import { PropsWithChildren } from "react";
import { BottomSheetProvider } from "./bottomSheet";
import "./language";
import { ResponsiveProvider } from "./responsive";
import { ThemeProvider } from "./theme";

export default function ContextManager({ children }: PropsWithChildren) {
    return (
        <ThemeProvider>
            <ResponsiveProvider>
                <BottomSheetProvider>
                    {children}
                </BottomSheetProvider>
            </ResponsiveProvider>
        </ThemeProvider>
    );
}