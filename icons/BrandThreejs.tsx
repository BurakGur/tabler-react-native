import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandThreejs = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 22 3 3l19 5.5z" />
    <Path d="m12.573 17.58-6.152-1.576 8.796-9.466 1.914 6.64" />
    <Path d="M12.573 17.58 11 11l6.13 2.179M9.527 4.893 11 11 4.69 9.436z" />
  </Svg>
);
export default SvgBrandThreejs;
