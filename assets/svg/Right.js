import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Right(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={7}
      height={12}
      viewBox="0 0 7 12"
      fill="none"
      {...props}
    >
      <Path
        d="M6.83 5.615a.523.523 0 010 .77L.994 11.841a.615.615 0 01-.824 0 .522.522 0 010-.77L5.594 6 .17.93a.523.523 0 010-.771.615.615 0 01.824 0L6.83 5.615z"
        fill={props.color}
      />
    </Svg>
  )
}

export default Right
