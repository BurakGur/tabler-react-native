import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClipboardCopy = ({
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
    <Path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3m9-9V7a2 2 0 0 0-2-2h-2M13 17v-1a1 1 0 0 1 1-1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1-1 1h-1m-3 0h-1a1 1 0 0 1-1-1v-1" />
    <Path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2" />
  </Svg>
);
export default SvgClipboardCopy;
