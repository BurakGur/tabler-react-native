import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandSass = ({
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
    className="icon icon-tabler icon-tabler-brand-sass"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <Path d="M12 10.523c2.46-.826 4-.826 4-2.155 0-1.366-1.347-1.366-2.735-1.366-1.91 0-3.352.49-4.537 1.748-.848.902-1.027 2.449-.153 3.307.973.956 3.206 1.789 2.884 3.493-.233 1.235-1.469 1.823-2.617 1.202-.782-.424-.454-1.746.626-2.512s2.822-.992 4.1-.24c.98.575 1.046 1.724.434 2.193" />
  </Svg>
);
export default SvgBrandSass;
