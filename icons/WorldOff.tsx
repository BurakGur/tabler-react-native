import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWorldOff = ({
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
    className="icon icon-tabler icon-tabler-world-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5.657 5.615a9 9 0 1 0 12.717 12.739m1.672-2.322A9 9 0 0 0 7.98 3.948M3.6 9H9m4 0h7.4M3.6 15H15m4 0h1.4" />
    <Path d="M11.5 3a17 17 0 0 0-1.493 3.022M9.16 9.167c-.68 4.027.1 8.244 2.34 11.833M12.5 3a17 17 0 0 1 2.549 8.005m-.207 3.818A17 17 0 0 1 12.5 21M3 3l18 18" />
  </Svg>
);
export default SvgWorldOff;
