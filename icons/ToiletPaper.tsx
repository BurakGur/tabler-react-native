import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgToiletPaper = ({
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
    className="icon icon-tabler icon-tabler-toilet-paper"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 10a3 7 0 1 0 6 0 3 7 0 1 0-6 0M21 10c0-3.866-1.343-7-3-7M6 3h12M21 10v10l-3-1-3 2-3-3-3 2V10M6 10h.01" />
  </Svg>
);
export default SvgToiletPaper;
