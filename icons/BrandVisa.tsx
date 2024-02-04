import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandVisa = ({
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
    <Path d="m21 15-1-6-2.5 6M9 15l1-6M3 9h1v6h.5L7 9M16 9.5a.5.5 0 0 0-.5-.5h-.75c-.721 0-1.337.521-1.455 1.233l-.09.534A1.06 1.06 0 0 0 14.25 12a1.06 1.06 0 0 1 1.045 1.233l-.09.534A1.476 1.476 0 0 1 13.75 15H13a.5.5 0 0 1-.5-.5M18 14h2.7" />
  </Svg>
);
export default SvgBrandVisa;
