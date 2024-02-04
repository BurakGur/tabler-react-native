import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHearts = ({
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
    <Path d="M14.017 18 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.153 5.784" />
    <Path d="m15.99 20 4.197-4.223a2.81 2.81 0 0 0 0-3.948 2.747 2.747 0 0 0-3.91-.007l-.28.282-.279-.283a2.747 2.747 0 0 0-3.91-.007 2.81 2.81 0 0 0-.007 3.948L15.983 20z" />
  </Svg>
);
export default SvgHearts;
