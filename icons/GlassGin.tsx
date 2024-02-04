import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlassGin = ({
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
    <Path d="M8 21h8M12 15v6M5.5 5a6.5 2 0 1 0 13 0 6.5 2 0 1 0-13 0" />
    <Path d="M5.75 4.5C5.138 5.25 5 6.5 5 8a7 7 0 0 0 14 0c0-1.5-.094-2.75-.75-3.5" />
  </Svg>
);
export default SvgGlassGin;
