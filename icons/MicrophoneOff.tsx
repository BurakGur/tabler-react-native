import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicrophoneOff = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
}: {
  size: number,
  stroke: number,
  color: string,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-microphone-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m3 3 18 18M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1-.13.874m-2 2A3 3 0 0 1 9 10.002v-1" />
    <Path d="M5 10a7 7 0 0 0 10.846 5.85m2-2A6.97 6.97 0 0 0 18.998 10M8 21h8M12 17v4" />
  </Svg>
);
export default SvgMicrophoneOff;
