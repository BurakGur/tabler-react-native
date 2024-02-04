import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrentLocation = ({
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
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0M12 2v2M12 20v2M20 12h2M2 12h2" />
  </Svg>
);
export default SvgCurrentLocation;
