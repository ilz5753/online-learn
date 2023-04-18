import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export function FacebookLogo() {
    return (
        <Svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M6 24c0-9.9 8.1-18 18-18s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8C12.5 40.3 6 32.9 6 24z"
                fill="url(#paint0_linear_0_5716)"
            />
            <Path
                d="M31.8 24H27v-3.5c0-1.4.5-2.5 2.7-2.5H32v-4.6c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H21v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V29h4l.8-5z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_0_5716"
                    x1={41.4741}
                    y1={40.754}
                    x2={41.4741}
                    y2={6}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#0062E0" />
                    <Stop offset={1} stopColor="#19AFFF" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}