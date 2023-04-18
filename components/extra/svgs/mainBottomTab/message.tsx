import Svg, { Path } from "react-native-svg";
import { IColor } from '../../../../type';
export default function MessageLogo({ color }: IColor) {
    return (
        <Svg
            width={20}
            height={18}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 0h14a3 3 0 013 3v10a3 3 0 01-3 3h-3.697l-2.61 1.74c-.42.28-.966.28-1.386 0L6.697 16H3a3 3 0 01-3-3V3a3 3 0 013-3zm3.5 10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM15 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                fill={color}
            />
        </Svg>
    )
}