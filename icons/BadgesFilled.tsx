import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBadgesFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M16.486 12.143 12 14.833l-4.486-2.69A1 1 0 0 0 6 13v4a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17v-4a1 1 0 0 0-1.514-.857"
    />
    <Path
      fill="currentColor"
      stroke="none"
      d="M16.486 3.143 12 5.833l-4.486-2.69A1 1 0 0 0 6 4v4a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 8V4a1 1 0 0 0-1.514-.857"
    />
  </Svg>
);
export default SvgBadgesFilled;
