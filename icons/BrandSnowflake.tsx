import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSnowflake = ({
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
    className="icon icon-tabler icon-tabler-brand-snowflake"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M14 21v-5.5l4.5 2.5M10 21v-5.5L5.5 18M3.5 14.5 8 12 3.5 9.5M20.5 9.5 16 12l4.5 2.5M10 3v5.5L5.5 6M14 3v5.5L18.5 6M12 11l1 1-1 1-1-1z" />
  </Svg>
);
export default SvgBrandSnowflake;
