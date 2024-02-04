import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrowel = ({
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
    className="icon icon-tabler icon-tabler-trowel"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m14.42 9.058-5.362 5.363a1.978 1.978 0 0 1-3.275-.773L3.101 5.604a1.978 1.978 0 0 1 2.502-2.502l8.045 2.682a1.978 1.978 0 0 1 .773 3.274zM10 10l6.5 6.5M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772" />
  </Svg>
);
export default SvgTrowel;
