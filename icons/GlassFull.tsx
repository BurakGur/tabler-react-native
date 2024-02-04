import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlassFull = ({
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
    <Path d="M8 21h8M12 15v6M17 3l1 7c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-7z" />
    <Path d="M6 10a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
  </Svg>
);
export default SvgGlassFull;
