import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSteam = ({
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
    className="icon icon-tabler icon-tabler-brand-steam"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M16.5 5a4.5 4.5 0 1 1-.653 8.953L11.5 16.962V17a3 3 0 0 1-2.824 3H8.5a3 3 0 0 1-2.94-2.402L3 16.5V13l3.51 1.755a2.99 2.99 0 0 1 2.834-.635l2.727-3.818A4.5 4.5 0 0 1 16.5 5" />
    <Circle cx={16.5} cy={9.5} r={1} fill="currentColor" />
  </Svg>
);
export default SvgBrandSteam;
