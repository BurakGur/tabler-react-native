import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandTaobao = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M2 5c.968.555 1.335 1.104 2 2M2 10c5.007 3.674 2.85 6.544 0 10M10 4c-.137 4.137-2.258 5.286-3.709 6.684M10 6c2.194-.8 3.736-.852 6.056-.993 4.206-.158 5.523 2.264 5.803 5.153.428 4.396-.077 7.186-2.117 9.298-1.188 1.23-3.238 2.62-7.207.259M11 10h6M13 10v6.493M8 13h10M16 15.512l.853 1.72" />
    <Path d="M16.5 17c-1.145.361-7 3-8.5-.5M11.765 8.539 10 11" />
  </Svg>
);
export default SvgBrandTaobao;
