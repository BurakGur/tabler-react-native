import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoustache = ({
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
    <Path d="M15 9a3 3 0 0 1 2.599 1.5h0c.933 1.333 2.133 1.556 3.126 1.556h.291l.77-.044h.213q-1.444 2.888-6.6 3h-.565a3 3 0 0 1 .165-6z" />
    <Path d="M9 9a3 3 0 0 0-2.599 1.5h0c-.933 1.333-2.133 1.556-3.126 1.556h-.291l-.77-.044h-.213q1.445 2.888 6.6 3h.565a3 3 0 0 0-.165-6z" />
  </Svg>
);
export default SvgMoustache;
