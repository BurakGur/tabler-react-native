import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandNuxt = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-brand-nuxt"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m12.146 8.583-1.3-2.09a1.046 1.046 0 0 0-1.786.017l-5.91 9.908A1.046 1.046 0 0 0 4.047 18H7.96M20.043 18c.743 0 1.201-.843.82-1.505l-4.044-7.013a.936.936 0 0 0-1.638 0l-4.043 7.013c-.382.662.076 1.505.819 1.505z" />
  </Svg>
);
export default SvgBrandNuxt;
