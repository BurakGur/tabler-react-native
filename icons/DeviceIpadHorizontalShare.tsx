import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceIpadHorizontalShare = ({
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
    className="icon icon-tabler icon-tabler-device-ipad-horizontal-share"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12.5 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M9 17h3M16 22l5-5M21 21.5V17h-4.5" />
  </Svg>
);
export default SvgDeviceIpadHorizontalShare;
