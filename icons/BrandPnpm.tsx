import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandPnpm = ({
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
    className="icon icon-tabler icon-tabler-brand-pnpm"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 17h4v4H3zM10 17h4v4h-4zM17 17h4v4h-4zM17 10h4v4h-4zM17 3h4v4h-4zM10 10h4v4h-4zM10 3h4v4h-4zM3 3h4v4H3z" />
  </Svg>
);
export default SvgBrandPnpm;
