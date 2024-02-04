import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWorldCheck = ({
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
    <Path d="M20.946 12.99a9 9 0 1 0-9.46 7.995M3.6 9h16.8M3.6 15h13.9" />
    <Path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.311 12.001M15 19l2 2 4-4" />
  </Svg>
);
export default SvgWorldCheck;
