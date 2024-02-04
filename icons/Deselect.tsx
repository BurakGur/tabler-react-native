import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeselect = ({
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
    <Path d="M12 8h3a1 1 0 0 1 1 1v3M16 16H9a1 1 0 0 1-1-1V8M12 20v.01M16 20v.01M8 20v.01M4 20v.01M4 16v.01M4 12v.01M4 8v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M20 8v.01M20 12v.01M20 16v.01M3 3l18 18" />
  </Svg>
);
export default SvgDeselect;
