import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Magazin(props) {
  return (
    <Svg
      width={23}
      height={27}
      viewBox="0 0 23 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_109_563)">
        <Path
          d="M0 3.375C0 1.513 1.473 0 3.286 0H23v21.937H21.357v3.375H23V27H3.286C1.473 27 0 25.486 0 23.625V3.375zm3.286 18.563c-.909 0-1.643.754-1.643 1.687s.734 1.688 1.643 1.688h16.428v-3.375H3.286zm-1.643-1.235a3.222 3.222 0 011.643-.453h1.643V1.687H3.286c-.909 0-1.643.755-1.643 1.688v17.328zM6.57 1.688V20.25h14.786V1.687H6.571zM9.036 6.75h9.857v1.688H9.036V6.75zm0 5.063h9.857V13.5H9.036v-1.688z"
          fill={props?.color ? props.color : "#fff"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_109_563">
          <Path fill="#fff" d="M0 0H23V27H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Magazin
