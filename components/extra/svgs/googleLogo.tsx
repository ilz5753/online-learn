import Svg, { Path } from "react-native-svg"
export function GoogleLogo() {
    return (
        <Svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.01 20.91H24v6.575h9.15c-.395 2.125-1.593 3.926-3.393 5.131v4.266h5.494c3.215-2.96 5.069-7.318 5.069-12.495 0-1.206-.108-2.365-.31-3.478z"
                fill="#4285F4"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.25 36.881l-5.493-4.265c-1.523 1.02-3.47 1.623-5.757 1.623-4.428 0-8.175-2.99-9.512-7.009h-5.68v4.404C11.605 37.19 17.355 41 24 41c4.59 0 8.438-1.522 11.25-4.119z"
                fill="#34A853"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.955 24c0-1.12.193-2.21.533-3.23v-4.404h-5.68A16.994 16.994 0 007 24c0 2.744.657 5.34 1.808 7.635l5.68-4.405a10.22 10.22 0 01-.533-3.23z"
                fill="#FBBC05"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.499 16.304l4.875-4.876C32.43 8.685 28.582 7 24 7c-6.645 0-12.395 3.81-15.192 9.366l5.68 4.404c1.337-4.018 5.084-7.009 9.512-7.009 2.496 0 4.737.858 6.499 2.543z"
                fill="#EA4335"
            />
        </Svg>
    )
}