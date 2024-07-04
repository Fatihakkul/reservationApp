import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Notification(props) {
  return (
    <Svg
      width={20}
      height={23}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.286 0h1.428v1.473c3.612.36 6.429 3.423 6.429 7.152V13l2.647 2.664.21.211v2.812H0v-2.812l.21-.21L2.857 13V8.625c0-3.729 2.817-6.792 6.429-7.152V0zM10 2.875c-3.156 0-5.714 2.574-5.714 5.75v4.968l-.21.212-2.647 2.663v.782H18.57v-.782l-2.647-2.663-.21-.212V8.625c0-3.176-2.558-5.75-5.714-5.75zm-2.857 17.25H8.57c0 .795.639 1.438 1.429 1.438s1.429-.643 1.429-1.438h1.428A2.869 2.869 0 0110 23a2.869 2.869 0 01-2.857-2.875z"
        fill="#1C9DD9"
      />
    </Svg>
  )
}

export default Notification
