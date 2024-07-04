import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { theme } from "../../src/theme"

function FillHomeIcon(props) {
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
        d="M22.545 7.673l-6.48-4.534c-1.766-1.238-4.478-1.17-6.176.146L4.253 7.684c-1.125.877-2.014 2.677-2.014 4.095v7.762c0 2.869 2.329 5.209 5.197 5.209h12.128a5.2 5.2 0 005.197-5.198v-7.627c0-1.519-.979-3.386-2.216-4.252zM14.344 20.25a.85.85 0 01-.844.844.85.85 0 01-.844-.844v-3.375a.85.85 0 01.844-.844.85.85 0 01.844.844v3.375z"
        fill={ theme.colors.mainColor}
      />
    </Svg>
  )
}

export default FillHomeIcon
