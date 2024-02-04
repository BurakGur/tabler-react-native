import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVolcano = ({
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
    <Path d="M9 8V7a2 2 0 1 0-4 0M15 8V7a2 2 0 1 1 4 0M4 20l3.472-7.812A2 2 0 0 1 9.3 11h5.4a2 2 0 0 1 1.828 1.188L20 20" />
    <Path d="M6.192 15.064A2 2 0 0 1 6.667 15c.527-.009 1.026.178 1.333.5.307.32.806.507 1.333.5.527.007 1.026-.18 1.334-.5.307-.322.806-.509 1.333-.5.527-.009 1.026.178 1.333.5.308.32.807.507 1.334.5.527.007 1.026-.18 1.333-.5.307-.322.806-.509 1.333-.5q.243.005.472.064M12 8V4" />
  </Svg>
);
export default SvgVolcano;
