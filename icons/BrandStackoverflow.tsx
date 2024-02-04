import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandStackoverflow = ({
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
    <Path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1M8 16h8M8.322 12.582l7.956.836M8.787 9.168l7.826 1.664M10.096 5.764l7.608 2.472" />
  </Svg>
);
export default SvgBrandStackoverflow;
