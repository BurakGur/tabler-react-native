import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFenceOff = ({
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
    <Path d="M12 12H4v4h12m4 0v-4h-4M6 16v4h4v-4M10 12v-2m0-4L8 4M6 6v6M14 16v4h4v-2M18 12V6l-2-2-2 2v4M3 3l18 18" />
  </Svg>
);
export default SvgFenceOff;
