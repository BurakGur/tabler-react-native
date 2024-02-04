import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBorderRadius = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-border-radius"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 12V8a4 4 0 0 1 4-4h4M16 4v.01M20 4v.01M20 8v.01M20 12v.01M4 16v.01M20 16v.01M4 20v.01M8 20v.01M12 20v.01M16 20v.01M20 20v.01" />
  </Svg>
);
export default SvgBorderRadius;
