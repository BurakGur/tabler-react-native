import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceComputerCameraOff = ({
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
    <Path d="M6.15 6.153a7 7 0 0 0 9.696 9.696m2-2a7 7 0 0 0-9.699-9.695" />
    <Path d="M9.13 9.122a3 3 0 0 0 3.743 3.749m2-2a3 3 0 0 0-3.737-3.736M8 16l-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16M3 3l18 18" />
  </Svg>
);
export default SvgDeviceComputerCameraOff;
