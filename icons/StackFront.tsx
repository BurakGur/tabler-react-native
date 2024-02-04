import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStackFront = ({
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
    className="icon icon-tabler icon-tabler-stack-front"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M12 4 4 8l8 4 8-4z" />
    <Path d="m8 14-4 2 8 4 8-4-4-2" />
    <Path d="m8 10-4 2 8 4 8-4-4-2" />
  </Svg>
);
export default SvgStackFront;
