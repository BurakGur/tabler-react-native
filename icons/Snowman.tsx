import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSnowman = ({
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
    <Path d="M12 3a4 4 0 0 1 2.906 6.75 6 6 0 1 1-5.81 0A4 4 0 0 1 12 3M17.5 11.5 20 10M6.5 11.5 4 10M12 13h.01M12 16h.01" />
  </Svg>
);
export default SvgSnowman;
