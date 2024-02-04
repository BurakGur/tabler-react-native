import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindElectricity = ({
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
    className="icon icon-tabler icon-tabler-wind-electricity"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m20 7-3 5h4l-3 5M3 16h4a2 2 0 1 1 0 4M3 12h8a2 2 0 1 0 0-4M3 8h3a2 2 0 1 0 0-4" />
  </Svg>
);
export default SvgWindElectricity;
