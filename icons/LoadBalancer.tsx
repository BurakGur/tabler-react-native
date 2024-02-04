import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLoadBalancer = ({
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
    className="icon icon-tabler icon-tabler-load-balancer"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 16v3M12 10V3M9 6l3-3 3 3M12 10V3" />
    <Path d="m9 6 3-3 3 3M14.894 12.227l6.11-2.224M17.159 8.21l3.845 1.793-1.793 3.845M9.101 12.214l-6.075-2.211M6.871 8.21l-3.845 1.793 1.793 3.845" />
  </Svg>
);
export default SvgLoadBalancer;
