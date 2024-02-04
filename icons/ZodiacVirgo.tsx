import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZodiacVirgo = ({
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
    <Path d="M3 4a2 2 0 0 1 2 2v9M5 6a2 2 0 0 1 4 0v9M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
    <Path d="M12 21a7 5 0 0 0 7-5v-2a3 3 0 0 0-6 0" />
  </Svg>
);
export default SvgZodiacVirgo;
