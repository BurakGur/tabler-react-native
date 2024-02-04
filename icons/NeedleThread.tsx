import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNeedleThread = ({
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
    className="icon icon-tabler icon-tabler-needle-thread"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 21Q2 20 14.785 4.291a3.5 3.5 0 1 1 5.078 4.791Q4.001 22 3 21M17.5 6.5l-1 1" />
    <Path d="M17 7c-2.333-2.667-3.5-4-5-4s-2 1-2 2c0 4 8.161 8.406 6 11-1.056 1.268-3.363 1.285-5.75.808M5.739 15.425C4.346 14.86 2 13.5 2 12M19.5 9.5 21 11" />
  </Svg>
);
export default SvgNeedleThread;
