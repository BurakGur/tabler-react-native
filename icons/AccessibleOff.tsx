import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAccessibleOff = ({
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
    <Path d="m10 16.5 2-3 2 3m-2-3V12m2.627-1.376L15 10.5m-6 0 2.231.744" />
    <Path d="M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73" />
    <Path d="M12 8a.5.5 0 1 0-.5-.5M3 3l18 18" />
  </Svg>
);
export default SvgAccessibleOff;
