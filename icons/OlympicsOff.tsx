import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOlympicsOff = ({
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
    <Path d="M6 6a3 3 0 1 0 3 3M15 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M9 9a3 3 0 0 0 3 3m2.566-1.445a3 3 0 0 0-4.135-4.113M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586-3.431a3 3 0 0 0-1.43-1.414M3 3l18 18" />
  </Svg>
);
export default SvgOlympicsOff;
