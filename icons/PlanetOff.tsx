import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlanetOff = ({
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
    className="icon icon-tabler icon-tabler-planet-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18.816 13.58c1.956 1.825 3.157 3.449 3.184 4.445m-3.428.593c-2.098-.634-4.944-2.03-7.919-3.976-5.47-3.579-9.304-7.664-8.56-9.123.32-.628 1.591-.6 3.294-.113" />
    <Path d="M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581-2.425A7 7 0 0 0 9.474 5.47M3 3l18 18" />
  </Svg>
);
export default SvgPlanetOff;
