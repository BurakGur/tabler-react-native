import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadar2 = ({
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
    <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <Path d="M15.51 15.56A5 5 0 1 0 12 17" />
    <Path d="M18.832 17.86A9 9 0 1 0 12 21M12 12v9" />
  </Svg>
);
export default SvgRadar2;
