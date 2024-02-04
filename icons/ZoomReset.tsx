import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZoomReset = ({
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
    className="icon icon-tabler icon-tabler-zoom-reset"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m21 21-6-6M3.268 12.043A7.02 7.02 0 0 0 9.902 17a7.01 7.01 0 0 0 7.043-6.131 7 7 0 0 0-5.314-7.672A7.02 7.02 0 0 0 3.39 7.6" />
    <Path d="M3 4v4h4" />
  </Svg>
);
export default SvgZoomReset;
