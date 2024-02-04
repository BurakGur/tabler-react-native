import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandTeams = ({
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
    className="icon icon-tabler icon-tabler-brand-teams"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 7h10v10H3zM6 10h4M8 10v4" />
    <Path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5-5V9h-5M18 18a4 4 0 0 0 4-4V9h-4" />
    <Path d="M13.003 8.83a3 3 0 1 0-1.833-1.833" />
    <Path d="M15.83 8.36a2.5 2.5 0 1 0 .594-4.117" />
  </Svg>
);
export default SvgBrandTeams;
