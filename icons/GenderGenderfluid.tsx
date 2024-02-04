import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGenderGenderfluid = ({
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
    <Path d="M10 15.464a4 4 0 1 0 4-6.928 4 4 0 0 0-4 6.928M15.464 14l3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9 3 3M5.5 8.5l3-3M21 21l-6-6M17 20l3-3M3 7V3h4" />
  </Svg>
);
export default SvgGenderGenderfluid;
