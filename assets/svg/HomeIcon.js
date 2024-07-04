import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeIcon(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.148 3.195L4.084 7.92c-1.013.787-1.834 2.464-1.834 3.735v8.336c0 2.61 2.126 4.748 4.736 4.748h13.028c2.61 0 4.736-2.138 4.736-4.736v-8.19c0-1.362-.911-3.106-2.025-3.882L15.772 3.06c-1.575-1.103-4.106-1.046-5.624.135zM13.5 20.239v-3.375"
        stroke="#9393AA"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HomeIcon
