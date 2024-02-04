import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCss3 = ({
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
    className="icon icon-tabler icon-tabler-brand-css3"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m20 4-2 14.5-6 2-6-2L4 4z" />
    <Path d="M8.5 8h7L11 12h4l-.5 3.5-2.5.75-2.5-.75-.1-.5" />
  </Svg>
);
export default SvgBrandCss3;
