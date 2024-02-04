import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSpyOff = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 11h8m4 0h6M5 11V7c0-.571.16-1.105.437-1.56M8 4h8a3 3 0 0 1 3 3v4M4 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0M14.88 14.877a3 3 0 1 0 4.239 4.247m.59-3.414a3 3 0 0 0-1.425-1.422M10 17h4M3 3l18 18" />
  </Svg>
);
export default SvgSpyOff;
