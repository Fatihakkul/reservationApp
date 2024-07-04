import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Iletisim(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.964 15.795l-.916-.528a14.498 14.498 0 01-5.315-5.315l-.528-.916.743-.743 1.749-1.749-1.994-4.989-5.328.967v.228c0 9.87 8.005 17.875 17.875 17.875h.228l.966-5.328-4.988-1.998-1.749 1.749-.743.747zm2.161-4.107L22 14.438 20.625 22H19.25C8.62 22 0 13.38 0 2.75V1.375L7.563 0l2.75 6.875-2.39 2.39a13.123 13.123 0 004.813 4.812l2.389-2.39z"
        fill="#1C9DD9"
      />
    </Svg>
  )
}

export default Iletisim
