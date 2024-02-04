import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFingerprintOff = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
  ...props
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
    className=""
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3M8 11c0-.848.264-1.634.713-2.28m2.4-1.621A4 4 0 0 1 16 11v1M12 12v1a14 14 0 0 0 2.5 8M8 15a18 18 0 0 0 1.8 6M4.9 19a22 22 0 0 1-.9-7v-1a8 8 0 0 1 1.854-5.143M8.03 4.032A8 8 0 0 1 16 4.05M3 3l18 18" />
  </Svg>
);
export default SvgFingerprintOff;
