import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRubberStamp = ({
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
    <Path d="M21 17.85H3c0-4.05 1.421-4.05 3.79-4.05C12 13.8 8 9.21 8 7a4 4 0 1 1 8 0c0 2.21-4 6.8 1.21 6.8 2.369 0 3.79 0 3.79 4.05M5 21h14" />
  </Svg>
);
export default SvgRubberStamp;
