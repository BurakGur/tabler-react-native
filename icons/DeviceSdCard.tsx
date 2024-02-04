import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceSdCard = ({
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
    <Path d="M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6.172a2 2 0 0 0-1.414.586L5.586 7.414A2 2 0 0 0 5 8.828V19a2 2 0 0 0 2 2M13 6v2M16 6v2M10 7v1" />
  </Svg>
);
export default SvgDeviceSdCard;
