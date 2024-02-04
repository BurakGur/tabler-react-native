import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoodAnnoyed = ({
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
    <Path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
    <Path d="M15 14c-2 0-3 1-3.5 2.05M9 10h-.01M15 10h-.01" />
  </Svg>
);
export default SvgMoodAnnoyed;
