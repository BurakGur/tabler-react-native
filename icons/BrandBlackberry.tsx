import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandBlackberry = ({
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
    <Path d="M7 6a1 1 0 0 0-1-1H4l-.5 2H6a1 1 0 0 0 1-1M6 12a1 1 0 0 0-1-1H3l-.5 2H5a1 1 0 0 0 1-1M13 12a1 1 0 0 0-1-1h-2l-.5 2H12a1 1 0 0 0 1-1M14 6a1 1 0 0 0-1-1h-2l-.5 2H13a1 1 0 0 0 1-1M12 18a1 1 0 0 0-1-1H9l-.5 2H11a1 1 0 0 0 1-1M20 15a1 1 0 0 0-1-1h-2l-.5 2H19a1 1 0 0 0 1-1M21 9a1 1 0 0 0-1-1h-2l-.5 2H20a1 1 0 0 0 1-1" />
  </Svg>
);
export default SvgBrandBlackberry;
