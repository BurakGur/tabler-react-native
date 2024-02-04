import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicrophone = ({
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
    <Path d="M9 5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3z" />
    <Path d="M5 10a7 7 0 0 0 14 0M8 21h8M12 17v4" />
  </Svg>
);
export default SvgMicrophone;
