import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBucket = ({
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
    <Path d="M4 7a8 4 0 1 0 16 0A8 4 0 1 0 4 7" />
    <Path d="M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2q.5-1.5 2.737-10.035A7.5 7.5 0 0 0 20 7" />
  </Svg>
);
export default SvgBucket;
