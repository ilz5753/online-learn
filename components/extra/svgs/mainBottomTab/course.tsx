import Svg, { Path } from "react-native-svg";
import { IColor } from '../../../../type';
export default function CourseLogo({ color }: IColor) {
    return (
        <Svg
            width={16}
            height={21}
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 .47h11a2 2 0 012 2.001v12.99c0 .168-.038.322-.113.472l-.545 1.09a1 1 0 000 .895l.543 1.088A1 1 0 0115 20.47H3a3 3 0 01-3-3v-14a3 3 0 013-3zm10.408 16a3 3 0 000 2H3a1 1 0 110-2h10.408zM5 6.472a1 1 0 001 1h4a1 1 0 100-2H6a1 1 0 00-1 1z"
                fill={color}
            />
        </Svg>
    )
}