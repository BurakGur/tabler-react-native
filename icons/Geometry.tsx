import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGeometry = ({
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
    <Path d="m7 21 4-12m2 0 1.48 4.439m.949 2.847L17 21M10 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12c1.526 2.955 4.588 5 8 5 3.41 0 6.473-2.048 8-5M12 5V3" />
  </Svg>
);
export default SvgGeometry;
