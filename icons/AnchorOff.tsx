import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAnchorOff = ({
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
    <Path d="M12 12v9M4 13a8 8 0 0 0 14.138 5.13m1.44-2.56A8 8 0 0 0 20 13M21 13h-2M5 13H3M12.866 8.873a3 3 0 1 0-3.737-3.747M3 3l18 18" />
  </Svg>
);
export default SvgAnchorOff;
