import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function WeatherIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.732.875v3.43h2.286V.875h-2.286zm6.414 22.027a7.986 7.986 0 002.729-6.02 8.002 8.002 0 00-8-8.004 8.002 8.002 0 00-7.986 8.486 8.543 8.543 0 00-2.173 1.138 10.37 10.37 0 01-.127-1.62c0-5.683 4.605-10.29 10.286-10.29 5.68 0 10.286 4.607 10.286 10.29a10.26 10.26 0 01-2.975 7.238 5.71 5.71 0 00-2.04-1.218zm7.3-7.164h3.429v2.287h-3.429v-2.287zm.714-7.85l-2.97 1.715 1.144 1.98 2.969-1.715-1.143-1.98zm-7.989-2.47l1.714-2.97 1.98 1.143-1.714 2.97-1.98-1.143zM7.885 3.591L9.6 6.561l1.979-1.143-1.714-2.97-1.98 1.143zm-2.469 7.992L2.447 9.868l1.143-1.98 2.97 1.715-1.144 1.98zm-1.112 4.155H.875v2.287h3.429v-2.287zM30.16 25.875l-2.97-1.715 1.144-1.98 2.969 1.715-1.143 1.98z"
        fill="url(#paint0_linear_131_22263)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 30.608h8.625c1.905 0 3.45-1.522 3.45-3.4 0-1.877-1.545-3.4-3.45-3.4-.885 0-1.692.329-2.302.868a6.141 6.141 0 00-.389-2.477 5.793 5.793 0 012.691-.657c3.176 0 5.75 2.537 5.75 5.666 0 3.13-2.574 5.667-5.75 5.667H11.5c-4.763 0-8.625-3.806-8.625-8.5s3.862-8.5 8.625-8.5c3.763 0 6.963 2.375 8.141 5.686a5.775 5.775 0 00-2.211.64c-.895-2.37-3.213-4.06-5.93-4.06-3.493 0-6.325 2.791-6.325 6.234 0 3.442 2.832 6.233 6.325 6.233z"
        fill="url(#paint1_linear_131_22263)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_131_22263"
          x1={16.875}
          y1={0.875}
          x2={16.875}
          y2={25.875}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EFC977" />
          <Stop offset={1} stopColor="#E07256" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_131_22263"
          x1={14.375}
          y1={15.875}
          x2={14.375}
          y2={32.875}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#B2D4F7" />
          <Stop offset={1} stopColor="#D9E2F3" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default WeatherIcon
