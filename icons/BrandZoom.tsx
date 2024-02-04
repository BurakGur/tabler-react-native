import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandZoom = ({
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
    <Path d="M17.011 9.385v5.128L21 18V6zM3.887 6h10.08C15.435 6 17 7.203 17 8.803v8.196a.99.99 0 0 1-.975 1H5.652c-1.667 0-2.652-1.5-2.652-3l.01-8a.88.88 0 0 1 .208-.71.84.84 0 0 1 .67-.287z" />
  </Svg>
);
export default SvgBrandZoom;
