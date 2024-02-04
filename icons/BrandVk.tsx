import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandVk = ({
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
    className="icon icon-tabler icon-tabler-brand-vk"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M14 19h-4a8 8 0 0 1-8-8V6h4v5a4 4 0 0 0 4 4h0V6h4v4.5h.03A4.53 4.53 0 0 0 18 6.004h4l-.342 1.711A6.86 6.86 0 0 1 18 12.504h0a5.34 5.34 0 0 1 3.566 4.111L22 19.004h0-4a4.53 4.53 0 0 0-3.97-4.496v4.5z" />
  </Svg>
);
export default SvgBrandVk;
