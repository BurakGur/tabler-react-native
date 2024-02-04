import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNavigationQuestion = ({
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
    <Path d="M16.081 11.847 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5q2.025.686 3.037 1.03M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </Svg>
);
export default SvgNavigationQuestion;
