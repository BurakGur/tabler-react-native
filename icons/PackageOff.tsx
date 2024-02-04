import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPackageOff = ({
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
    className="icon icon-tabler icon-tabler-package-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8.812 4.793 12 3l8 4.5V16m-2.282 1.784L12 21l-8-4.5v-9l2.223-1.25M14.543 10.57 20 7.5M12 12v9M12 12 4 7.5M16 5.25l-4.35 2.447M9.086 9.139 8 9.75M3 3l18 18" />
  </Svg>
);
export default SvgPackageOff;
