import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZodiacScorpio = ({
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
    className="icon icon-tabler icon-tabler-zodiac-scorpio"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 4a2 2 0 0 1 2 2v9M5 6a2 2 0 0 1 4 0v9M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3-3m0 6 3-3" />
  </Svg>
);
export default SvgZodiacScorpio;
