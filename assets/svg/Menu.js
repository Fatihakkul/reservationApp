import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Menu(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M3 5h18M3 12h18M3 19h11"
        stroke="#1C2C58"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Menu
