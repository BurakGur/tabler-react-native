import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEyeBolt = ({
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
    <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <Path d="M13.1 17.936A9 9 0 0 1 12 18q-5.4 0-9-6 3.6-6 9-6t9 6M19 16l-2 3h4l-2 3" />
  </Svg>
);
export default SvgEyeBolt;
