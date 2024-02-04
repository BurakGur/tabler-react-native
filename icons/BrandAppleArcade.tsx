import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandAppleArcade = ({
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
    <Path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M20 12.5v4.75a.7.7 0 0 1-.055.325.7.7 0 0 1-.348.366l-5.462 2.58a5 5 0 0 1-4.27 0l-5.462-2.58a.705.705 0 0 1-.401-.691V12.5" />
    <Path d="m4.431 12.216 5.634-2.332a5.07 5.07 0 0 1 3.87 0l5.634 2.332a.692.692 0 0 1 .028 1.269l-5.462 2.543a5.06 5.06 0 0 1-4.27 0l-5.462-2.543a.691.691 0 0 1 .028-1.27zM12 7v6" />
  </Svg>
);
export default SvgBrandAppleArcade;
