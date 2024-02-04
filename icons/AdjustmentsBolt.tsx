import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAdjustmentsBolt = ({
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
    <Path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 4v4M6 12v8M10 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 4v10M19 16l-2 3h4l-2 3M12 18v2M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 4v1M18 9v3" />
  </Svg>
);
export default SvgAdjustmentsBolt;
