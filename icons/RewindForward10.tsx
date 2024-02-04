import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindForward10 = ({
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
    <Path d="m17 9 3-3-3-3" />
    <Path d="M8 17.918A6 6 0 0 1 3 12a6 6 0 0 1 6-6h11M12 14v6M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0" />
  </Svg>
);
export default SvgRewindForward10;
