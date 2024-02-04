import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartRadar = ({
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
    <Path d="m12 3 9.5 7L18 21H6L2.5 10z" />
    <Path d="m12 7.5 5.5 4L15 17H8.5l-2-5.5z" />
    <Path d="m2.5 10 9.5 3 9.5-3" />
    <Path d="M12 3v10l6 8M6 21l6-8" />
  </Svg>
);
export default SvgChartRadar;
