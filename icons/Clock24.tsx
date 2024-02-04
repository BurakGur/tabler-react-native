import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClock24 = ({
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
    <Path d="M3 12a9 9 0 0 0 5.998 8.485M21 12a9 9 0 1 0-18 0M12 7v5M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2M18 15v2a1 1 0 0 0 1 1h1M21 15v6" />
  </Svg>
);
export default SvgClock24;
