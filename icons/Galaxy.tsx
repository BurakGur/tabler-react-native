import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGalaxy = ({
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
    className="icon icon-tabler icon-tabler-galaxy"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 3q-2 1.5-2 4.5c0 3 2 4.5 2 4.5s2 1.5 2 4.5q0 3-2 4.5" />
    <Path d="M19.794 16.5q-.3-2.482-2.897-3.982C14.3 11.018 12 12 12 12s-2.299.982-4.897-.518Q4.505 9.982 4.206 7.5" />
    <Path d="M19.794 7.5q-2.299-.982-4.897.518C12.3 9.518 12 12 12 12s-.299 2.482-2.897 3.982q-2.598 1.5-4.897.518" />
  </Svg>
);
export default SvgGalaxy;
