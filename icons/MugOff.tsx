import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMugOff = ({
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
    className="icon icon-tabler icon-tabler-mug-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 5h5.917A1.08 1.08 0 0 1 16 6.077V12m-.167 3.88A4.33 4.33 0 0 1 11.667 19H7.333C4.94 19 3 17.071 3 14.692V6.077A1.08 1.08 0 0 1 4.083 5H5M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334c0 1.148-.89 2.103-2.06 2.297M3 3l18 18" />
  </Svg>
);
export default SvgMugOff;
