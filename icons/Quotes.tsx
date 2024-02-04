import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgQuotes = ({
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
    className="icon icon-tabler icon-tabler-quotes"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 12c-1.333-1.854-1.333-4.146 0-6M8 12c-1.333-1.854-1.333-4.146 0-6M16 18c1.333-1.854 1.333-4.146 0-6M20 18c1.333-1.854 1.333-4.146 0-6" />
  </Svg>
);
export default SvgQuotes;
