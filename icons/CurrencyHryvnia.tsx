import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyHryvnia = ({
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
    <Path d="M8 7a2.64 2.64 0 0 1 2.562-2h3.376A2.64 2.64 0 0 1 16.5 7a2.57 2.57 0 0 1-1.344 2.922L9.28 12.86A3.34 3.34 0 0 0 7.5 16.5a3.11 3.11 0 0 0 3.05 2.5h2.888A2.64 2.64 0 0 0 16 17M6 10h12M6 14h12" />
  </Svg>
);
export default SvgCurrencyHryvnia;
