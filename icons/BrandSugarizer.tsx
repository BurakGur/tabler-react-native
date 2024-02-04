import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSugarizer = ({
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
    className="icon icon-tabler icon-tabler-brand-sugarizer"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m14.277 16 3.252-3.252a1.61 1.61 0 0 0-2.277-2.276L12 13.723l-3.252-3.251a1.61 1.61 0 0 0-2.276 2.276L9.723 16l-3.251 3.252a1.61 1.61 0 1 0 2.276 2.277L12 18.277l3.252 3.252a1.61 1.61 0 1 0 2.277-2.277zM9 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </Svg>
);
export default SvgBrandSugarizer;
