import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Gundem(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.375 13a11.375 11.375 0 11-22.75 0 11.375 11.375 0 0122.75 0zM0 13a13 13 0 1026 0 13 13 0 00-26 0zm12.188-7.313v7.75l.36.244 4.875 3.25.675.451.904-1.35-.675-.452-4.515-3.017V4.875h-1.624v.813z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Gundem
