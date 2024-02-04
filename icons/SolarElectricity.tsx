import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSolarElectricity = ({
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
    <Path d="M4 6.28v11.44a1 1 0 0 0 1.243.97l6-1.5a1 1 0 0 0 .757-.97V7.78a1 1 0 0 0-.757-.97l-6-1.5A1 1 0 0 0 4 6.28M8 6v12M12 12H4M20 7l-3 5h4l-3 5" />
  </Svg>
);
export default SvgSolarElectricity;
