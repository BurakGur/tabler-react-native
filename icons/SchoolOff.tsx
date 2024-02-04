import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSchoolOff = ({
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
    <Path d="M22 9 12 5l-2.136.854M7 7 2 9l10 4 .697-.279m2.878-1.151L22 9v6" />
    <Path d="M6 10.6V16c0 1.657 2.686 3 6 3 2.334 0 4.357-.666 5.35-1.64M18 14v-3.4M3 3l18 18" />
  </Svg>
);
export default SvgSchoolOff;
