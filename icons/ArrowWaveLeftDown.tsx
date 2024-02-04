import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowWaveLeftDown = ({
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
    <Path d="M7 14H3v-4" />
    <Path d="M21 12c-.887 1.284-2.48 2.033-4 2-1.52.033-3.113-.716-4-2s-2.48-2.033-4-2c-1.52-.033-3 1-4 2l-2 2" />
  </Svg>
);
export default SvgArrowWaveLeftDown;
