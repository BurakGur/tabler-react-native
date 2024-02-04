import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCypress = ({
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
    className="icon icon-tabler icon-tabler-brand-cypress"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M19.48 17.007A9 9 0 1 0 12 21a2.08 2.08 0 0 0 1.974-1.423L17.5 9M13.5 9l2 6" />
    <Path d="M10.764 9.411a3 3 0 1 0-.023 5.19" />
  </Svg>
);
export default SvgBrandCypress;
