import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeLink = ({
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
    className="icon icon-tabler icon-tabler-home-link"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M20.085 11.085 12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143M20 21a1 1 0 1 0 2 0 1 1 0 1 0-2 0M20 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M15 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <Path d="m21 16-5 3 5 2" />
  </Svg>
);
export default SvgHomeLink;
