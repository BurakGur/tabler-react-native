import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWaveSine = ({
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
    <Path d="M21 12h-2c-.894 0-1.662-.857-1.761-2-.296-3.45-.749-6-2.749-6s-2.5 3.582-2.5 8-.5 8-2.5 8-2.452-2.547-2.749-6c-.1-1.147-.867-2-1.763-2h-2" />
  </Svg>
);
export default SvgWaveSine;
