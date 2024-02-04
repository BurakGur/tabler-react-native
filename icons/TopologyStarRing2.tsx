import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTopologyStarRing2 = ({
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
    <Path d="M14 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12h4M14 12h4M12 6v4M12 14v4M5.5 10.5l5-5M13.5 5.5l5 5M18.5 13.5l-5 5M10.5 18.5l-5-5" />
  </Svg>
);
export default SvgTopologyStarRing2;
