import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceTvOff = ({
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
    <Path d="M11 7h8a2 2 0 0 1 2 2v8m-1.178 2.824c-.25.113-.529.176-.822.176H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2M16 3l-4 4-4-4M3 3l18 18" />
  </Svg>
);
export default SvgDeviceTvOff;
