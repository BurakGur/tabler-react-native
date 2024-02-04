import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLollipopOff = ({
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
    <Path d="M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416-1.57a7 7 0 1 0-9.884-9.915" />
    <Path d="M21 10a3.5 3.5 0 0 0-7 0M12.71 12.715A3.5 3.5 0 0 1 7 10M14 17c.838 0 1.607-.294 2.209-.785M17.5 13.5A3.5 3.5 0 0 0 14 10M14 3a3.5 3.5 0 0 0-3.5 3.5M3 21l6-6M3 3l18 18" />
  </Svg>
);
export default SvgLollipopOff;
