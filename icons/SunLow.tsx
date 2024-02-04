import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSunLow = ({
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
    <Path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M4 12h.01M12 4v.01M20 12h.01M12 20v.01M6.31 6.31 6.3 6.3M17.71 6.31l-.01-.01M17.7 17.7l.01.01M6.3 17.7l.01.01" />
  </Svg>
);
export default SvgSunLow;
