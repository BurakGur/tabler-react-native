import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandApplePodcast = ({
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
    className="icon icon-tabler icon-tabler-brand-apple-podcast"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18.364 18.364a9 9 0 1 0-12.728 0" />
    <Path d="M11.766 22h.468a2 2 0 0 0 1.985-1.752l.5-4A2 2 0 0 0 12.734 14h-1.468a2 2 0 0 0-1.985 2.248l.5 4A2 2 0 0 0 11.766 22M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </Svg>
);
export default SvgBrandApplePodcast;
