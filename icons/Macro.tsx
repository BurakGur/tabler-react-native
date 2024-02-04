import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMacro = ({
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
    <Path d="M6 15a6 6 0 1 0 12 0" />
    <Path d="M18 15a6 6 0 0 0-6 6M12 21a6 6 0 0 0-6-6M12 21V11M12 11a5 5 0 0 1-5-5V3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-5 5" />
  </Svg>
);
export default SvgMacro;
