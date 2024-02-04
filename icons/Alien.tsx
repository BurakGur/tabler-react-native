import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlien = ({
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
    <Path d="M11 17a2.5 2.5 0 0 0 2 0" />
    <Path d="M12 3C7.336 3 4.604 5.331 4.138 8.595a11.82 11.82 0 0 0 2 8.592 10.8 10.8 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.8 10.8 0 0 0 3.199-3.064 11.9 11.9 0 0 0 2-8.592C19.4 5.33 16.668 3 12.004 3zM8 11l2 2M16 11l-2 2" />
  </Svg>
);
export default SvgAlien;
