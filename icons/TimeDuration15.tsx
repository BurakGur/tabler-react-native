import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTimeDuration15 = ({
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
    <Path d="M12 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M9 9v6M3 12v.01M12 21v.01M7.5 4.2v.01M16.5 19.8v.01M7.5 19.8v.01M4.2 16.5v.01M19.8 16.5v.01M4.2 7.5v.01M21 12a9 9 0 0 0-9-9" />
  </Svg>
);
export default SvgTimeDuration15;
