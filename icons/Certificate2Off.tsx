import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCertificate2Off = ({
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
    <Path d="M12 12a3 3 0 1 0 3 3M11 7h3" />
    <Path d="M10 18v4l2-1 2 1v-4M10 19H8a2 2 0 0 1-2-2V6m1.18-2.825C7.43 3.063 7.709 3 8 3h8a2 2 0 0 1 2 2v9m-.175 3.82A2 2 0 0 1 16 19h-2M3 3l18 18" />
  </Svg>
);
export default SvgCertificate2Off;
