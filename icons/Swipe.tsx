import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSwipe = ({
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
    <Path d="M15 16.572v2.42A2.01 2.01 0 0 1 12.991 21H5.01A2.01 2.01 0 0 1 3 18.991V11.01A2.01 2.01 0 0 1 5.009 9h2.954" />
    <Path d="M9.167 4.511a2.04 2.04 0 0 1 2.496-1.441l7.826 2.097a2.04 2.04 0 0 1 1.441 2.496l-2.097 7.826a2.04 2.04 0 0 1-2.496 1.441L8.51 14.833a2.04 2.04 0 0 1-1.441-2.496L9.167 4.51z" />
  </Svg>
);
export default SvgSwipe;
