import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandGolang = ({
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
    <Path d="M15.695 14.305c1.061 1.06 2.953.888 4.226-.384 1.272-1.273 1.444-3.165.384-4.226s-2.953-.888-4.226.384c-1.272 1.273-1.444 3.165-.384 4.226M12.68 9.233c-1.084-.497-2.545-.191-3.591.846-1.284 1.273-1.457 3.165-.388 4.226 1.07 1.06 2.978.888 4.261-.384A3.67 3.67 0 0 0 14 12h-2.427M5.5 15H4M6 9H4M5 12H2" />
  </Svg>
);
export default SvgBrandGolang;
