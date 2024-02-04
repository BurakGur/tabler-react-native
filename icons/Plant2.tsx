import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlant2 = ({
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
    <Path d="M2 9a10 10 0 1 0 20 0" />
    <Path d="M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10" />
    <Path d="M12 4a9.7 9.7 0 0 1 2.99 7.5M9.01 11.5A9.7 9.7 0 0 1 12 4" />
  </Svg>
);
export default SvgPlant2;
