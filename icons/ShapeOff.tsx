import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShapeOff = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3.575 3.597a2 2 0 0 0 2.849 2.808M17 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17.574 17.598a2 2 0 0 0 2.826 2.83M5 7v10M9 5h8M7 19h10M19 7v8M3 3l18 18" />
  </Svg>
);
export default SvgShapeOff;
