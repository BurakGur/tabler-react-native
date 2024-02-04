import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandRust = ({
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
    <Path d="M10.139 3.463c.473-1.95 3.249-1.95 3.722 0a1.916 1.916 0 0 0 2.859 1.185c1.714-1.045 3.678.918 2.633 2.633a1.916 1.916 0 0 0 1.184 2.858c1.95.473 1.95 3.249 0 3.722a1.916 1.916 0 0 0-1.185 2.859c1.045 1.714-.918 3.678-2.633 2.633a1.916 1.916 0 0 0-2.858 1.184c-.473 1.95-3.249 1.95-3.722 0a1.916 1.916 0 0 0-2.859-1.185c-1.714 1.045-3.678-.918-2.633-2.633a1.916 1.916 0 0 0-1.184-2.858c-1.95-.473-1.95-3.249 0-3.722A1.916 1.916 0 0 0 4.648 7.28c-1.045-1.714.918-3.678 2.633-2.633a1.914 1.914 0 0 0 2.858-1.184" />
    <Path d="M8 12h6a2 2 0 1 0 0-4H8v8z" />
    <Path d="M19 16h-2a2 2 0 0 1-2-2 2 2 0 0 0-2-2h-1M9 8H5M5 16h4" />
  </Svg>
);
export default SvgBrandRust;
