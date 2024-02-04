import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouteOff = ({
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
    <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 19h4.5c.71 0 1.372-.212 1.924-.576m1.545-2.459A3.5 3.5 0 0 0 16.5 12h-.499m-4 0H8.5a3.5 3.5 0 0 1-2.477-5.972M8.5 5H12M3 3l18 18" />
  </Svg>
);
export default SvgRouteOff;
