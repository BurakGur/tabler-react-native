import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicroscopeOff = ({
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
    className="icon icon-tabler icon-tabler-microscope-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5 21h14M6 18h2M7 18v3M10 10l-1 1 3 3 1-1m2-2 3-3-3-3-3 3M10.5 12.5 9 14M17 3l3 3M12 21a6 6 0 0 0 5.457-3.505m.441-3.599a6 6 0 0 0-2.183-3.608M3 3l18 18" />
  </Svg>
);
export default SvgMicroscopeOff;
