import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandNotion = ({
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
    className="icon icon-tabler icon-tabler-brand-notion"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11 17.5V11h.5l4 6h.5v-6.5" />
    <Path d="m19.077 20.071-11.53.887a1 1 0 0 1-.876-.397L4.2 17.267a1 1 0 0 1-.2-.6V5.926a1 1 0 0 1 .923-.997l11.389-.876a2 2 0 0 1 1.262.33l1.535 1.023A2 2 0 0 1 20 7.07v12.004a1 1 0 0 1-.923.997M4.5 5.5 7 8" />
    <Path d="M20 7 7 8v12.5" />
  </Svg>
);
export default SvgBrandNotion;
