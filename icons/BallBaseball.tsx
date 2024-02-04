import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBallBaseball = ({
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
    <Path d="M5.636 18.364A9 9 0 1 0 18.364 5.636 9 9 0 0 0 5.636 18.364" />
    <Path d="M12.495 3.02a9 9 0 0 1-9.475 9.475M20.98 11.505a9 9 0 0 0-9.475 9.475M9 9l2 2M13 13l2 2M11 7l2 1M7 11l1 2M16 11l1 2M11 16l2 1" />
  </Svg>
);
export default SvgBallBaseball;
