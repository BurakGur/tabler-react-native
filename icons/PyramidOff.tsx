import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPyramidOff = ({
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
    className="icon icon-tabler icon-tabler-pyramid-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M21.384 17.373a1 1 0 0 0-.013-1.091l-8.54-13.836a1 1 0 0 0-1.664 0l-1.8 2.917m-1.531 2.48-5.209 8.439a1.005 1.005 0 0 0 .386 1.452l8.092 4.054a2 2 0 0 0 1.789 0l5.903-2.958M12 2v6m0 4v10M3 3l18 18" />
  </Svg>
);
export default SvgPyramidOff;
