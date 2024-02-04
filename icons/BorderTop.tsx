import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBorderTop = ({
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
    className="icon icon-tabler icon-tabler-border-top"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 4h16M4 8v.01M12 8v.01M20 8v.01M4 12v.01M8 12v.01M12 12v.01M16 12v.01M20 12v.01M4 16v.01M12 16v.01M20 16v.01M4 20v.01M8 20v.01M12 20v.01M16 20v.01M20 20v.01" />
  </Svg>
);
export default SvgBorderTop;
