import Svg, { Path } from "react-native-svg";
import { IColor } from "../../../type";

export function PaymentIconLogo({ color }: IColor) {
    return (
        <Svg
            width={20}
            height={16}
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5.146h15c.92 0 1.667.747 1.667 1.667V13.48c0 .92-.747 1.666-1.667 1.666h-15c-.92 0-1.667-.746-1.667-1.666V1.813C.833.893 1.58.146 2.5.146zm15 5V3.48h-15v1.666h15zm-6.25 5H15a.833.833 0 110 1.667h-3.75a.833.833 0 010-1.667z"
                fill={color}
            />
        </Svg>
    )
}