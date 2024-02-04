import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandBandlab = ({
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
    <Path d="m6.885 7-2.536 4.907C2.328 15.752 1.85 20.682 8.17 21h6.808c4.86-.207 7.989-2.975 4.607-9.093L16.597 7" />
    <Path d="M15.078 4H9.942l3.678 8.768c.547 1.14.847 1.822.162 2.676-.053.093-1.332 1.907-3.053 1.495-.825-.187-1.384-.926-1.32-1.74.04-.91.62-1.717 1.488-2.074a4.46 4.46 0 0 1 2.723-.358" />
  </Svg>
);
export default SvgBrandBandlab;
