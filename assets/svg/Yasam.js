import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Yasam(props) {
  return (
    <Svg
      width={26}
      height={30}
      viewBox="0 0 26 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.644.633L13 .018l-.644.615-8.357 8.062-.285.282V11.25h2.624l-4.255 5.016-.226.263v2.221H4.48L.226 23.766 0 24.029v2.221h12.071V30h1.858v-3.75H26v-2.221l-.226-.263-4.254-5.016h2.623v-2.221l-.227-.263-4.253-5.016h2.623V8.977L22 8.7 13.644.633zm.285 23.742V11.25H12.07v13.125H2.153l5.055-5.953 1.312-1.547H4.01l5.055-5.953 1.312-1.547H5.989L13 2.607l7.01 6.768H15.624l1.312 1.547 5.055 5.953h-4.51l1.312 1.547 5.055 5.953h-9.918z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Yasam
