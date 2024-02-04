import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrightnessUp = ({
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
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 5V3M17 7l1.4-1.4M19 12h2M17 17l1.4 1.4M12 19v2M7 17l-1.4 1.4M6 12H4M7 7 5.6 5.6" />
  </Svg>
);
export default SvgBrightnessUp;
