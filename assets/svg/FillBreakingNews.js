import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FillBreakingNews(props) {
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
        d="M0 12.42C0 6.47 7.857 0 7.857 0s2.88 2.664 3.955 4.016c.492-.647 2.117-1.927 2.117-1.927S20 7.183 20 12.416C20 18.157 15.545 23 10 23 4.393 23 0 18.153 0 12.42zm10.076 6.268c1.13 0 2.13-.315 3.071-.944 1.88-1.32 2.384-3.962 1.255-6.037-.125-.252-.25-.504-.438-.755l-2.259 2.641S8.071 8.94 7.817 8.625C5.942 10.952 5 12.273 5 13.782c0 3.082 2.259 4.905 5.076 4.905z"
        fill="#1C9DD9"
      />
    </Svg>
  )
}

export default FillBreakingNews
