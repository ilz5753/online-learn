import Svg, { Path } from "react-native-svg";

export function DeleteLogo() {
    return (
        <Svg
            width={22}
            height={16}
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.207 4.793L12 6.586l1.793-1.793a1 1 0 111.414 1.414L13.414 8l1.793 1.793a1 1 0 01-1.414 1.414L12 9.414l-1.793 1.793a1 1 0 01-1.414-1.414L10.586 8 8.793 6.207a1 1 0 011.414-1.414zM6 .5h15a1 1 0 011 1v13a1 1 0 01-1 1H6a1 1 0 01-.793-.39l-5-6.5a1 1 0 010-1.22l5-6.5A1 1 0 016 .5zM2.262 8l4.23 5.5H20v-11H6.492L2.262 8z"
                fill="#fff"
            />
        </Svg>
    );
}