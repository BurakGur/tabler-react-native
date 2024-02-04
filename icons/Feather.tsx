import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFeather = ({
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
    <Path d="m4 20 10-10m0-5v5h5m-9-1v5h5m-9-1v5h5m-5-5 4-4 4-4" />
    <Path d="M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0 0 16.483 4c-.97 0-1.847.367-2.483 1m-3 13 4-4 4-4" />
  </Svg>
);
export default SvgFeather;
