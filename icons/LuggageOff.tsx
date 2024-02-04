import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLuggageOff = ({
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
    className="icon icon-tabler icon-tabler-luggage-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8c0-.546.218-1.04.573-1.4M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M6 10h4m4 0h4M6 16h10M9 20v1M15 20v1M3 3l18 18" />
  </Svg>
);
export default SvgLuggageOff;
