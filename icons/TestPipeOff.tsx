import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTestPipeOff = ({
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
    className="icon icon-tabler icon-tabler-test-pipe-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M20 8.04A804 804 0 0 0 16 12m-2 2q-1.627 1.628-6.122 6.164a2.857 2.857 0 0 1-4.041-4.04C6.855 13.124 8.91 11.087 10 10m2-2q1.307-1.308 3.959-4M7 13h6M19 15l1.5 1.6m-.74 3.173a2 2 0 0 1-2.612-2.608M15 3l6 6M3 3l18 18" />
  </Svg>
);
export default SvgTestPipeOff;
