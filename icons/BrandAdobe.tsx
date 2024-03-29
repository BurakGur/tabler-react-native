import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandAdobe = ({
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
    <Path d="m12.893 4.514 7.977 14a.993.993 0 0 1-.394 1.365 1.04 1.04 0 0 1-.5.127H16.5l-4.5-8-2.5 4H11l2 4H4.023c-.565 0-1.023-.45-1.023-1 0-.171.045-.34.13-.49l7.977-13.993a1.034 1.034 0 0 1 1.786 0z" />
  </Svg>
);
export default SvgBrandAdobe;
