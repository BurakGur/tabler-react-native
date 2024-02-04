import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWorldExclamation = ({
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
    <Path d="M20.986 12.51a9 9 0 1 0-5.71 7.873M3.6 9h16.8M3.6 15h10.9" />
    <Path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18M19 16v3M19 22v.01" />
  </Svg>
);
export default SvgWorldExclamation;
