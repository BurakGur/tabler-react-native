import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyOff = ({
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
    <Path d="M18.531 14.524a7 7 0 0 0-9.06-9.053M7.049 7.053a7 7 0 0 0 9.903 9.896M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3M3 3l18 18" />
  </Svg>
);
export default SvgCurrencyOff;
