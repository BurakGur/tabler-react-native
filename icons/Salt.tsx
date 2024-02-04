import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSalt = ({
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
    className="icon icon-tabler icon-tabler-salt"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 13v.01M10 16v.01M14 16v.01M7.5 8h9l-.281-2.248A2 2 0 0 0 14.234 4H9.766A2 2 0 0 0 7.78 5.752z" />
    <Path d="m7.5 8-1.612 9.671A2 2 0 0 0 7.861 20h8.278a2 2 0 0 0 1.973-2.329L16.5 8" />
  </Svg>
);
export default SvgSalt;
