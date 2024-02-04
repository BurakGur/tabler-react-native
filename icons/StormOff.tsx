import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStormOff = ({
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
    <Path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.441a3 3 0 0 0-1.41-1.39" />
    <Path d="M7.037 7.063a7 7 0 0 0 9.907 9.892m1.585-2.426A7 7 0 0 0 9.471 5.47" />
    <Path d="M5.369 14.236c-1.605-3.428-1.597-6.673-1-9.849M18.63 9.76a14.3 14.3 0 0 1 1.368 6.251m-.37 3.608q-.132.69-.295 1.377M3 3l18 18" />
  </Svg>
);
export default SvgStormOff;
