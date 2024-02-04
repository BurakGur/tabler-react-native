import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTemperatureSnow = ({
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
    className="icon icon-tabler icon-tabler-temperature-snow"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4M14.75 4l1 2H18" />
    <Path d="m17 4-3 5 2 3M20.25 10 19 12l1.25 2" />
    <Path d="M22 12h-6l-2 3M18 18h-2.25l-1 2" />
    <Path d="m17 20-3-5h-1M12 9l2.088.008" />
  </Svg>
);
export default SvgTemperatureSnow;
