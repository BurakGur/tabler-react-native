import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLungsOff = ({
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
    className="icon icon-tabler icon-tabler-lungs-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6.583 6.608c-1.206 1.058-2.07 2.626-2.933 5.449q-.63 2.055-.648 4.775c-.012 1.675 1.261 3.054 2.877 3.161l.203.007C7.693 20 9 18.665 9 17.02V9M15 11V7.257C15 6.563 15.552 6 16.233 6c.204 0 .405.052.584.15l.13.083c1.46 1.059 2.432 2.647 3.405 5.824q.63 2.055.648 4.775v.187m-1.455 2.51c-.417.265-.9.43-1.419.464l-.202.007c-1.613 0-2.92-1.335-2.92-2.98V15M9 12a3 3 0 0 0 2.132-.89M12 4v4M3 3l18 18" />
  </Svg>
);
export default SvgLungsOff;
