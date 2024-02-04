import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoxAlignRight = ({
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
    <Path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM8.998 20.003h.01M3.997 20.003h.011M3.997 15.002h.011M3.997 9.002h.011M3.997 4.002h.011M8.998 4.002h.01" />
  </Svg>
);
export default SvgBoxAlignRight;
