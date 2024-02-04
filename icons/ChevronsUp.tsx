import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChevronsUp = ({
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
    className="icon icon-tabler icon-tabler-chevrons-up"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m7 11 5-5 5 5M7 17l5-5 5 5" />
  </Svg>
);
export default SvgChevronsUp;
