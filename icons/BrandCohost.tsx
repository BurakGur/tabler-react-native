import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCohost = ({
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
    <Path d="M14 14a3 2 0 1 0 6 0 3 2 0 1 0-6 0" />
    <Path d="M4.526 17.666q-1.7-1.158-2.291-3.456-.596-2.31.32-4.19.915-1.883 2.938-3.254 2.021-1.371 4.749-2.132 2.715-.756 5.12-.61 2.412.15 4.112 1.31c1.7 1.16 1.897 1.924 2.291 3.456q.596 2.311-.32 4.192-.916 1.88-2.938 3.252-2.021 1.372-4.749 2.133-2.715.755-5.12.61-2.412-.153-4.112-1.31z" />
    <Path d="M11 12.508C10.47 12.192 9.77 12 9 12c-1.657 0-3 .895-3 2s1.343 2 3 2c.767 0 1.467-.192 2-.508" />
  </Svg>
);
export default SvgBrandCohost;
