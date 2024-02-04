import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandWebflow = ({
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
    <Path d="M17 10s-1.376 3.606-1.5 4c-.046-.4-1.5-8-1.5-8-2.627 0-3.766 1.562-4.5 3.5 0 0-1.843 4.593-2 5C7.487 14.132 7 10 7 10c-.15-2.371-2.211-3.98-4-3.98L5 19c2.745-.013 4.72-1.562 5.5-3.5 0 0 1.44-4.3 1.5-4.5.013.18 1 8 1 8 2.758 0 4.694-1.626 5.5-3.5L22 6c-2.732 0-4.253 2.055-5 4" />
  </Svg>
);
export default SvgBrandWebflow;
