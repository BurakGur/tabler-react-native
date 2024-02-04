import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRectangularPrismOff = ({
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
    <Path d="M8.18 8.18 4 10.273c-.619.355-1 1.01-1 1.718v5.018c0 .709.381 1.363 1 1.717l4 2.008a2.02 2.02 0 0 0 2 0l7.146-3.578m2.67-1.337.184-.093c.619-.355 1-1.01 1-1.718V8.99a1.98 1.98 0 0 0-1-1.717l-4-2.008a2.02 2.02 0 0 0-2 0L10.854 6.84M9 21v-7.5M9 13.5l3.048-1.458m2.71-1.296L20.5 8M3.5 11 9 13.5M3 3l18 18" />
  </Svg>
);
export default SvgRectangularPrismOff;
