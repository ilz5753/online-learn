import Svg, { Path } from "react-native-svg";
import { IColor } from "../../../type";

export function MessageBubble({ color }: IColor) {
    return (
        <Svg
            width={20}
            height={19}
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.833 9.647A9.167 9.167 0 1110 18.813H1.667a.833.833 0 01-.834-.833V9.647zM5 7.147c0 .46.373.833.833.833h7.5a.833.833 0 000-1.667h-7.5A.833.833 0 005 7.147zm0 3.333c0 .46.373.833.833.833h7.5a.833.833 0 000-1.666h-7.5A.833.833 0 005 10.48zm.833 2.5H10a.833.833 0 110 1.667H5.833a.833.833 0 110-1.667z"
                fill={color}
            />
        </Svg>
    )
}