import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function TimelineDot(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 19}
      height={props.height ?? 19}
      viewBox="0 0 19 19"
      fill="none"
      {...props}
    >
      <Circle
        cx={9.5}
        cy={9.5}
        r={9.5}
        transform="matrix(1 0 0 -1 0 19)"
        fill="url(#paint0_linear_109_585)"
      />
      <Circle
        cx={5.27778}
        cy={5.27778}
        r={5.27778}
        transform="matrix(1 0 0 -1 4.222 14.778)"
        fill="#FBFBFB"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_109_585"
          x1={19}
          y1={9.5}
          x2={0}
          y2={9.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1C9DD9" />
          <Stop offset={1} stopColor="#1C2C58" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default TimelineDot
