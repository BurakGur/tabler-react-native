import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSvelte = ({
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
    <Path d="m15 8-5 3 .821-.495c1.86-1.15 4.412-.49 5.574 1.352a3.91 3.91 0 0 1-1.264 5.42l-5.053 3.126c-1.86 1.151-4.312.591-5.474-1.251a3.91 3.91 0 0 1 1.263-5.42l.26-.16" />
    <Path d="m8 17 5-3-.822.496c-1.86 1.151-4.411.491-5.574-1.351a3.91 3.91 0 0 1 1.264-5.42l5.054-3.127c1.86-1.15 4.311-.59 5.474 1.252a3.91 3.91 0 0 1-1.264 5.42l-.26.16" />
  </Svg>
);
export default SvgBrandSvelte;
