import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBreadOff = ({
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
    className="icon icon-tabler icon-tabler-bread-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m8 4 10 .005V4a3 3 0 0 1 2 5.235V16m-.59 3.418c-.36.36-.86.582-1.41.582H6a2 2 0 0 1-2-2V9.236a3 3 0 0 1 .418-4.785M3 3l18 18" />
  </Svg>
);
export default SvgBreadOff;
