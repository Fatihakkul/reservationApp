import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Kunye(props) {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 21.075l-9.429-9.75V2.25h8.776L19.775 12 11 21.075zm9.89-10.223L11 .625H0V12l9.89 10.227L11 23.375l1.11-1.148 8.78-9.08L22 12l-1.11-1.148zM5.5 7.532c.313 0 .612-.13.833-.358a1.24 1.24 0 00.346-.862 1.24 1.24 0 00-.346-.861 1.16 1.16 0 00-.833-.357 1.16 1.16 0 00-.833.357 1.24 1.24 0 00-.346.862c0 .323.125.633.346.861.22.229.52.357.833.357z"
        fill="#1C9DD9"
      />
    </Svg>
  )
}

export default Kunye
