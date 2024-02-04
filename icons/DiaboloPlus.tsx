import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiaboloPlus = ({
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
    <Path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
    <Path d="M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3q.255 0 .508-.006M18 12l1.952-5.55A1 1 0 0 0 20 6.143V6" />
    <Path d="M6 12c0 1.105 2.686 2 6 2s6-.895 6-2M16 19h6M19 16v6" />
  </Svg>
);
export default SvgDiaboloPlus;
