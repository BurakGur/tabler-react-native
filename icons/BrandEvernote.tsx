import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandEvernote = ({
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
    <Path d="M4 8h5V3" />
    <Path d="M17.9 19c.6-2.5 1.1-5.471 1.1-9 0-4.5-2-5-3-5-1.906 0-3-.5-3.5-1-.354-.354-.5-1-1.5-1H9L4 8c0 6 2.5 8 5 8 1 0 1.5-.5 2-1.5s1.414-.326 2.5 0c1.044.313 2.01.255 2.5.5 1 .5 2 1.5 2 3 0 .5 0 3-3 3s-3-3-1-3M15 10h1" />
  </Svg>
);
export default SvgBrandEvernote;
