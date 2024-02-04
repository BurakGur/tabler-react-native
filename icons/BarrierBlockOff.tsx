import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBarrierBlockOff = ({
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
    className="icon icon-tabler icon-tabler-barrier-block-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11 7h8a1 1 0 0 1 1 1v7c0 .27-.107.516-.282.696M16 16H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2M7 16v4M7.5 16l4.244-4.244M13.745 9.755 16.5 7M13.5 16l1.249-1.249M16.741 12.759 20 9.5M4 13.5l4.752-4.752M17 17v3M5 20h4M15 20h4M17 7V5M3 3l18 18" />
  </Svg>
);
export default SvgBarrierBlockOff;
