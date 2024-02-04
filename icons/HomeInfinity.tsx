import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeInfinity = ({
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
    <Path d="M19 14v-2h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h2.5" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.75 1.032M15.536 17.586a2.123 2.123 0 0 0-2.929 0 1.95 1.95 0 0 0 0 2.828c.809.781 2.12.781 2.929 0s-.805.778 0 0l1.46-1.41 1.46-1.419" />
    <Path d="m15.54 17.582 1.46 1.42 1.46 1.41c.809.78-.805-.779 0 0s2.12.781 2.929 0a1.95 1.95 0 0 0 0-2.828 2.123 2.123 0 0 0-2.929 0" />
  </Svg>
);
export default SvgHomeInfinity;
