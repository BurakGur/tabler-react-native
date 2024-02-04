import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlagOff = ({
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
    className="icon icon-tabler icon-tabler-flag-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5 5v16M19 5v9M7.641 3.645A5 5 0 0 1 12 5a5 5 0 0 0 7 0M5 14a5 5 0 0 1 7 0 4.98 4.98 0 0 0 3.437 1.429m3.019-.966q.285-.21.544-.463M3 3l18 18" />
  </Svg>
);
export default SvgFlagOff;
