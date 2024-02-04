import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyLyd = ({
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
    <Path d="M11 15h.01M21 5v10a2 2 0 0 1-2 2h-2.764a2 2 0 0 1-1.789-1.106L14 15M5 8l2.773 4.687c.427.697.234 1.626-.43 2.075A1.4 1.4 0 0 1 6.57 15H4.346a.93.93 0 0 1-.673-.293L3 14" />
  </Svg>
);
export default SvgCurrencyLyd;
