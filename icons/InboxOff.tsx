import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInboxOff = ({
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
    <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.056.59-1.418" />
    <Path d="M4 13h3l3 3h4l.987-.987M17 13h3M3 3l18 18" />
  </Svg>
);
export default SvgInboxOff;
