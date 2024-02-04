import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTournament = ({
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
    <Path d="M2 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 20a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6" />
    <Path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2M14 10h4" />
  </Svg>
);
export default SvgTournament;
