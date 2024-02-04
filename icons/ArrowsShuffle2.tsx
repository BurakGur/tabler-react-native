import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowsShuffle2 = ({
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
    className="icon icon-tabler icon-tabler-arrows-shuffle-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m18 4 3 3-3 3M18 20l3-3-3-3" />
    <Path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5" />
    <Path d="M3 17h3a5 5 0 0 0 5-5 5 5 0 0 1 5-5h5" />
  </Svg>
);
export default SvgArrowsShuffle2;
