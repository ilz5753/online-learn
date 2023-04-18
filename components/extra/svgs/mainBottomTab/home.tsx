import Svg, { Path } from "react-native-svg";
import { IColor } from '../../../../type';
export default function HomeLogo({ color }: IColor) {
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
                d="M10.2 1.025l7 5.25a2 2 0 01.8 1.6v9.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-9.5a2 2 0 01.8-1.6l7-5.25a2 2 0 012.4 0z"
                fill={color}
            />
        </Svg>
    );
}