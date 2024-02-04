import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowBigUpLine = ({
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
    <Path d="M9 12H5.414a1 1 0 0 1-.707-1.707l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586A1 1 0 0 1 18.586 12H15v6H9zM9 21h6" />
  </Svg>
);
export default SvgArrowBigUpLine;
