import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoxAlignTop = ({
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
    <Path d="M4 10.005h16v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zM4 15.005v-.01M4 20.005v-.01M9 20.005v-.01M15 20.005v-.01M20 20.005v-.01M20 15.005v-.01" />
  </Svg>
);
export default SvgBoxAlignTop;
