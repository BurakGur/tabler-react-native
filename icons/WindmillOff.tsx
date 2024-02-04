import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindmillOff = ({
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
    <Path d="M15.061 11.06C16.241 10.236 17 8.95 17 7.5 17 5.01 14.76 3 12 3v5M12 12c0 2.76 2.01 5 4.5 5q.25 0 .49-.03m2.624-1.36C20.47 14.7 21 13.42 21 12h-5M12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zM6.981 7.033C4.737 7.318 3 9.435 3 12h9M3 3l18 18" />
  </Svg>
);
export default SvgWindmillOff;
