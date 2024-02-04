import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBiohazardOff = ({
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
    <Path d="M10.586 10.586a2 2 0 1 0 2.836 2.82" />
    <Path d="M11.939 14c0 .173.048.351.056.533v.217a4.75 4.75 0 0 1-4.533 4.745h-.217M2.495 14.745a4.75 4.75 0 0 1 7.737-3.693" />
    <Path d="M16.745 19.495a4.75 4.75 0 0 1-4.69-5.503h-.06M14.533 10.538a4.75 4.75 0 0 1 6.957 3.987v.217M10.295 10.929a4.75 4.75 0 0 1-2.988-3.64m.66-3.324a5 5 0 0 1 .5-.66l.164-.172M15.349 3.133a4.75 4.75 0 0 1-.836 7.385M3 3l18 18" />
  </Svg>
);
export default SvgBiohazardOff;
