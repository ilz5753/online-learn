import Svg, { Path } from "react-native-svg";
import { IColor } from "../../../../type";

export function SearchLogo({ color }: IColor) {
    return (
        <Svg
            width={19}
            height={19}
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75.833a7.917 7.917 0 016.156 12.895l3.061 3.06a.833.833 0 11-1.178 1.18l-3.061-3.062A7.917 7.917 0 118.75.833zM2.5 8.75a6.25 6.25 0 1012.5 0 6.25 6.25 0 00-12.5 0z"
                fill={color}
            />
        </Svg>
    )
}