import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandBing = ({
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
    className="icon icon-tabler icon-tabler-brand-bing"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m5 3 4 1.5v12l6-2.5-2-1-1-4 7 2.5V16L9 21l-4-2z" />
  </Svg>
);
export default SvgBrandBing;
