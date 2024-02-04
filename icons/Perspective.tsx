import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPerspective = ({
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
    className="icon icon-tabler icon-tabler-perspective"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m6.141 4.163 12 1.714a1 1 0 0 1 .859.99v10.266a1 1 0 0 1-.859.99l-12 1.714A1 1 0 0 1 5 18.847V5.153a1 1 0 0 1 1.141-.99" />
  </Svg>
);
export default SvgPerspective;
