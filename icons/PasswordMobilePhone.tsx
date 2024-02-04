import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPasswordMobilePhone = ({
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
    <Path d="M12 17v4M10 20l4-2M10 18l4 2M5 17v4M3 20l4-2M3 18l4 2M19 17v4M17 20l4-2M17 18l4 2M7 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8M11 5h2M12 17v.01" />
  </Svg>
);
export default SvgPasswordMobilePhone;
