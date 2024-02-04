import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClothesRackOff = ({
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
    className="icon icon-tabler icon-tabler-clothes-rack-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 7v1m0 4v9M9 21h6M7.757 9.243a6 6 0 0 0 3.129 1.653m3.578-.424a6 6 0 0 0 1.779-1.229M3 3l18 18" />
  </Svg>
);
export default SvgClothesRackOff;
