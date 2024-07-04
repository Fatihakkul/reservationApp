import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Ekonomi(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_109_555)">
        <Path
          d="M1.663 2.344a.884.884 0 00-.882-.881.884.884 0 00-.881.88v17.188a4.005 4.005 0 004.006 4.007H24.22a.884.884 0 00.881-.882.883.883 0 00-.881-.881H3.906a2.244 2.244 0 01-2.244-2.244V2.344zm21.616 5.31a.884.884 0 000-1.245.884.884 0 00-1.245 0l-6.409 6.409-4.065-4.065a.884.884 0 00-1.245 0L4.846 14.22a.884.884 0 000 1.245.884.884 0 001.245 0l4.846-4.846 4.066 4.065a.884.884 0 001.244 0l7.032-7.031z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={0.2}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_109_555">
          <Path fill="#fff" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Ekonomi
