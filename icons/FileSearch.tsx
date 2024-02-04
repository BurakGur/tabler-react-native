import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileSearch = ({
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
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M12 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v4.5" />
    <Path d="M14 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M18.5 19.5 21 22" />
  </Svg>
);
export default SvgFileSearch;
