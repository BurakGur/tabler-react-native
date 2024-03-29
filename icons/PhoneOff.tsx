import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhoneOff = ({
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
    <Path d="M3 21 21 3M5.831 14.161A15.95 15.95 0 0 1 3 6a2 2 0 0 1 2-2h4l2 5-2.5 1.5q.162.33.345.645m1.751 2.277A11 11 0 0 0 13.5 15.5L15 13l5 2v4a2 2 0 0 1-2 2 15.96 15.96 0 0 1-10.344-4.657" />
  </Svg>
);
export default SvgPhoneOff;
