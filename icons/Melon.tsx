import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMelon = ({
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
    <Path d="M20 10c0 5.523-4.477 10-10 10a9.97 9.97 0 0 1-6.984-2.842l4.343-4.153a4 4 0 0 0 5.76-5.51l4.342-4.153A9.96 9.96 0 0 1 20 10" />
  </Svg>
);
export default SvgMelon;
