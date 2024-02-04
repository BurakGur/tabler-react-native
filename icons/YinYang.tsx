import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgYinYang = ({
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
    className="icon icon-tabler icon-tabler-yin-yang"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <Path d="M12 3a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9" />
    <Circle cx={12} cy={7.5} r={0.5} fill="currentColor" />
    <Circle cx={12} cy={16.5} r={0.5} fill="currentColor" />
  </Svg>
);
export default SvgYinYang;
