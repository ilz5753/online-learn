import Svg, { Path } from "react-native-svg";
import { IColor } from '../../../../type';
export default function AccountLogo({ color }: IColor) {
    return (
        <Svg
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5a5 5 0 1010 0A5 5 0 004 5zM0 17v1a2 2 0 002 2h14a2 2 0 002-2v-1a5 5 0 00-5-5H5a5 5 0 00-5 5z"
                fill={color}
            />
        </Svg>
    )
}