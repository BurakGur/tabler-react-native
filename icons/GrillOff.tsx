import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGrillOff = ({
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
    <Path d="M8 8H5a6 6 0 0 0 6 6h2q.473 0 .926-.071m2.786-1.214a5.99 5.99 0 0 0 2.284-4.49V8h-7M18.827 18.815a2 2 0 1 1-2.663-2.633M9 14l-3 6M15 18H7M15 5V4M12 5V4M9 5V4M3 3l18 18" />
  </Svg>
);
export default SvgGrillOff;
