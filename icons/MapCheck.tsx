import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapCheck = ({
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
    className="icon icon-tabler icon-tabler-map-check"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m11 18-2-1-6 3V7l6-3 6 3 6-3v9M9 4v13M15 7v8M15 19l2 2 4-4" />
  </Svg>
);
export default SvgMapCheck;
