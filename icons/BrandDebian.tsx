import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandDebian = ({
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
    <Path d="M12 17c-2.397-.943-4-3.153-4-5.635 0-2.19 1.039-3.14 1.604-3.595C12.25 5.637 16 7.5 16 11c0 2.5-2.905 2.121-3.5 1.5s-1-1.5-.5-2.5" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
  </Svg>
);
export default SvgBrandDebian;
