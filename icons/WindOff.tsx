import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindOff = ({
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
    <Path d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0-2.34-3.24M3 12h9M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282M4 16h5.5a2.5 2.5 0 1 1-2.34 3.24M3 3l18 18" />
  </Svg>
);
export default SvgWindOff;
