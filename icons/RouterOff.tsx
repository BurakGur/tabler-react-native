import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouterOff = ({
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
    <Path d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362.36-.861.583-1.412.583H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8M17 17v.01M13 17v.01M12.226 8.2a4 4 0 0 1 6.024.55M9.445 5.407A8 8 0 0 1 21.5 6.5M3 3l18 18" />
  </Svg>
);
export default SvgRouterOff;
