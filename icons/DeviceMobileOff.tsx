import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceMobileOff = ({
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
    <Path d="M7.159 3.185C7.415 3.066 7.699 3 8 3h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6M11 4h2M3 3l18 18M12 17v.01" />
  </Svg>
);
export default SvgDeviceMobileOff;
