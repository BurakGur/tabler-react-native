import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandYoutubeKids = ({
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
    <Path d="m18.608 17.75-3.9.268h-.027a13.8 13.8 0 0 0-3.722.828l-2.511.908a4.11 4.11 0 0 1-3.287-.216 3.82 3.82 0 0 1-1.98-2.527l-1.376-6.05a3.67 3.67 0 0 1 .536-2.86A3.96 3.96 0 0 1 4.83 6.44l11.25-2.354c2.137-.448 4.247.85 4.713 2.9l1.403 6.162a3.68 3.68 0 0 1-.697 3.086 4 4 0 0 1-2.89 1.512v.002z" />
    <Path d="m9 10 1.208 5 4.292-4z" />
  </Svg>
);
export default SvgBrandYoutubeKids;
