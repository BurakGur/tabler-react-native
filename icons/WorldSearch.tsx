import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWorldSearch = ({
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
    <Path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15h7.9" />
    <Path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.574 8.62M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </Svg>
);
export default SvgWorldSearch;
