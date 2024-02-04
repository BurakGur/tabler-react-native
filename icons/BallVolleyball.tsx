import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBallVolleyball = ({
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
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <Path d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20" />
    <Path d="M12 12a8 8 0 0 0-7.464 4.928M12.951 7.353a12 12 0 0 0-9.88 4.111" />
    <Path d="M12 12a8 8 0 0 0-.536-8.928M15.549 15.147a12 12 0 0 0 1.38-10.611" />
  </Svg>
);
export default SvgBallVolleyball;
