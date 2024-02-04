import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCircuitPushbutton = ({
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
    <Path d="M2 17h2M20 17h2M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 11h12M12 11V5" />
  </Svg>
);
export default SvgCircuitPushbutton;
